import { test, expect } from "@playwright/test";

test("sign up successfully", async ({ page }) => {
    // 1) o usuário deve acessar a página de autenticação e clicar para fazer o cadastro
    await page.goto("/auth");
    await page.getByRole("link", { name: "Criar conta" }).click();

    // 2) o usuário é redirecionado e preenche seus dados
    expect(await page.goto("/auth/new")).toBeTruthy();
    await page.getByLabel("Nome de usuário *").fill("anyusernamename");
    await page.getByLabel("Nome completo *").fill("any name");
    await page.getByLabel("Cidade *").fill("any_city");
    await page.getByLabel("E-mail *").fill("anyvalidmail@mail.com");
    await page.getByLabel("Seg").click();
    await page.getByLabel("Ter").click();

    // 3) o usuário clica no botão e é exibido um toast informando que foi cadastrado
    await page.getByRole("button", { name: "REGISTRAR" }).click();
    expect(page.getByText("Usuário cadastrado com sucesso!")).toBeTruthy();
});

test("sign up fails", async ({ page }) => {
    // 1) o usuário deve acessar a página de autenticação e clicar para fazer o cadastro
    await page.goto("/auth");
    await page.getByRole("link", { name: "Criar conta" }).click();

    // 2) o usuário é redirecionado e preenche seus dados
    expect(await page.goto("/auth/new")).toBeTruthy();
    await page.getByLabel("Nome de usuário *").fill("anyusernamename");
    await page.getByLabel("Nome completo *").fill("any name");
    await page.getByLabel("Cidade *").fill("any_city");
    await page.getByLabel("E-mail *").fill("anyvalidmail@mail.com");
    await page.getByLabel("Seg").click();
    await page.getByLabel("Ter").click();

    // 3) o usuário clica no botão e é exibido um toast informando que não foi possível cadastrar
    await page.getByRole("button", { name: "REGISTRAR" }).click();
    expect(
        page.getByText("Não foi possível cadastrar o usuário!")
    ).toBeTruthy();
});
