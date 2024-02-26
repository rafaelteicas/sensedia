# Sensedia Portal

Aplicação em Next.js desenvolvida para a etapa seletiva.

### 🛠️ Libs

-   [Next.js 14](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Tailwind](https://tailwindcss.com/)
-   [Drizzle](https://orm.drizzle.team/)
-   [Postgres](https://www.postgresql.org/)
-   [NextAuth](https://next-auth.js.org/)
-   [TanStack Query v5](https://tanstack.com/query/latest)
-   [Axios](https://axios-http.com/ptbr/)
-   [React Hook Form](https://react-hook-form.com/)
-   [Zod](https://zod.dev/)
-   [Zustand](https://zustand-demo.pmnd.rs/)
-   [MaterialUI](https://mui.com/)
-   [Jest](https://jestjs.io/pt-BR/)

### 📄 User Stories

#### 1. Tabela de Usuários:

-   [x] -   Lista de Usuários
-   [x] -   Adicionar informações sobre Posts e Álbuns
-   [x] -   Criar endpoints que retornem Dias da Semana e cidades
-   [x] -   Ícone de lixeira no hover do item da lista
-   [ ] -   Campo blocked para true ???

##### Bônus:

-   [x] -   Campo de busca e filtro por username e nome do usuário
-   [x] -   Header fixado ao topo

#### 2. Formulário de novos usuários

-   [x] -   Formulário que cadastra o usuário
-   [x] -   Imediatamente aparecer na tabela (Redirecionar para tabela)
-   [x] -   Formulário deve ter todas as informações removidas

##### Bônus:

-   [ ] -   O formulário deve ser processado server side
-   [x] -   Agrupar os dias da semana de forma programática
-   [x] -   Validação de formulário antes do envio
-   [x] -   Botões e inputs com o estilo definido pelo layout

#### 3. Roteamento

-   [x] -   Rota de usuário dinâmica acessível em /user/[username]
-   [x] -   Exibir informações básicas na página de perfil
-   [x] -   Garantir que a página de usuário não encontrado seja exibida de forma elegante
-   [x] -   Tabela de usuários na rota /user e o formulário em /user/new
-   [ ] -   Redirecionar de volta para a página de usuários e revalidar as informações ???
-   [x] -   UI de fallback quando os dados estão sendo buscados
-   [x] -   Header de acordo com a página

#### 4. Breadcrumb

-   [x] -   Breadcrumb acompanhando a rota
-   [x] -   Clicar em um item deve redirecionar para página esperada

#### 5. Menu dropdown

-   [x] -   Dropdown ao clicar na imagem de usuário ou nome
-   [x] -   Endpoint simulado ou um método que sustente os dados do usuário JSON

##### Bônus:

-   [x] -   Deduza as iniciais do usuário e use-o para o espaço reservado e foto do perfil

##### Outros:

-   [ ] -   Implemente o resto do layout
-   [ ] -   Testes
