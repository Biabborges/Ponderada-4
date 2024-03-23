import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { WorkshopService } from '../workshop/workshop.service';
import { ClassroomService } from './classroom.service';
import { ClassroomDTO } from './classroom.dto';

@Controller('/classrooms')
export class ClassroomController {
	constructor(private readonly workshopService: WorkshopService, private readonly classroomService: ClassroomService) {}

  /**
   * Registra uma nova turma com os dados fornecidos. Este método recebe os dados de uma turma
   * através do corpo da requisição e utiliza o `ClassroomService` para registrar a turma no sistema.
   * Os dados da turma são fornecidos como um objeto `ClassroomDTO`, que inclui todas as informações
   * necessárias para o cadastro de uma nova turma.
   * 
   * Este endpoint é acessado através de uma solicitação POST para '/classrooms', e o corpo da requisição
   * deve conter os dados da turma conforme definido pelo `ClassroomDTO`.
   * 
   * @param {ClassroomDTO} dataClassroom - O objeto contendo os dados da novfa turma a ser registrada.
   * 
   * @returns {Promise<classroom>} Uma promessa que resolve para a entidade `classroom` da turma
   * recém-registrada. Esta entidade inclui todos os dados da turma, incluindo um identificador único gerado
   * pelo sistema.
  */
    @Post()
    async registerClassroom(@Body() dataClassroom: ClassroomDTO) {
      return await this.classroomService.register(dataClassroom.idWorkshop, dataClassroom.name, dataClassroom.day, dataClassroom.startTime, dataClassroom.endTime );
    }

	@Post('/add-student')
	async addStudentToClassroom(@Body() body: { studentId: number; classroomId: number }) {
		await this.workshopService.addStudentToClassroom(body.studentId, body.classroomId);
		return { message: 'Aluno adicionado à turma com sucesso.' };
	}

	@Get('/ong/:id')
	async getClassroomsByOngId(@Param('id') id: string) {
		const classrooms = await this.classroomService.getClassroomsByOngId(Number(id));
		return classrooms;
	}

	@Post('/add-professor')
	async addProfessorToClassroom(@Body() body: { professorId: number, addClassrooms: number[] }) {
		await this.classroomService.addProfessorToClassroom(body.professorId, body.addClassrooms);
		return { message: 'Professor adicionado às turmas com sucesso.' };
	}

	@Post('/remove-professor')
	async removeProfessorToClassroom(@Body() body: { professorId: number, removeClassrooms: number[] }) {
		await this.classroomService.removeProfessorToClassroom(body.professorId, body.removeClassrooms);
		return { message: 'Professor removido das turmas com sucesso.' };
	}
}
