**Caso de Teste: Criar uma Nova Categoria**

**Os aquivo está localizado em:**`C:\Users\Inteli\Documents\GitHub\Ponderada-4\src\backend\ponderada.testes.automatizados\teste.automatizado.spec.ts`

**Objetivo:**
Verificar se é possível criar uma nova categoria com sucesso usando o endpoint de criar categorias do projeto.

**Pré-condição:**
- O sistema está em um estado limpo, sem categorias existentes.
- O endpoint `createCategory` está disponível e funcionando corretamente.

**Procedimento de Teste:**
1. Enviar uma requisição POST para o endpoint `createCategory`.
2. No corpo da requisição, incluir os dados da nova categoria:
   - categoryDto: { "name": "Nova Categoria", "color": "#FF0000" }
3. Verificar se a requisição é processada corretamente.

**Resultado Esperado:**
- A requisição é processada com sucesso.
- Uma nova categoria é criada no sistema com o nome "Nova Categoria" e a cor "#FF0000".
- O status de resposta HTTP é 200 (OK) ou 201 (Created).

**Resultado Obtido:**
- A requisição é processada com sucesso.
- Uma nova categoria é criada no sistema com o nome "Nova Categoria" e a cor "#FF0000".
- O status de resposta HTTP é 201 (Created).

**Pós-condição:**
- Uma nova categoria chamada "Nova Categoria" com a cor "#FF0000" é adicionada ao sistema.
- O sistema está pronto para lidar com outras requisições, incluindo a criação de mais categorias, se necessário.