import { test, expect } from "@playwright/test";
test("sign in successfully", async ({ page }) => {
    // 1) o usuário deve acessar a página de autenticação
    await page.goto("/auth");

    // 2) o usuário preenche os dados
    await page.getByLabel("E-mail *").fill("mail@mail.com");
    await page.getByLabel("Senha *").fill("any_pass");

    // 3) o usuário clica no botão para fazer o login e espera ver a página de usuário autenticado
    await page.getByRole("button", { name: "Entrar" }).click();
    expect(await page.goto("/user")).toBeTruthy();
});

test("sign in fails", async ({ page }) => {
    // 1) o usuário deve acessar a página de autenticação
    await page.goto("/auth");

    // 2) o usuário preenche os dados
    await page.getByLabel("E-mail *").fill("maildoesnotexists@mail.com");
    await page.getByLabel("Senha *").fill("any_pass");

    // 3) o usuário clica no botão para fazer o login e é exibido um toast informando que as credenciais são inválidas
    await page.getByRole("button", { name: "Entrar" }).click();
    expect(page.getByText("Credenciais inválidas")).toBeVisible();
});
