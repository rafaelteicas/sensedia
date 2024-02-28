import { test, expect } from "@playwright/test";

test("user list", async ({ page }) => {
    // 1) o usuário deve acessar o site e fazer o fluxo de login
    await page.goto("/");
    await page.getByLabel("E-mail *").fill("anyvalidmail@mail.com");
    await page.getByLabel("Senha *").fill("any_pass");
    await page.getByRole("button", { name: "ENTRAR" }).click();

    // 2) o usuário será capaz de ver a lista de usuários e realizar uma pesquisa
    await page.waitForURL("/user");
    await page.getByLabel("Procurar").fill("any");
    expect(page.getByText("anyvalidmail@mail.com")).toBeVisible();

    // 3) o usuário passa o mouse sobre o seu respectivo usuário e é exibido um ícone para realizar a exclusão
    await page.getByRole("cell", { name: "anyusernamename" }).hover();
    await page
        .getByRole("row", { name: "anyusernamename any name" })
        .getByRole("img")
        .click();

    // 4) um modal é exibido onde o usuário pode cancelar o processo ou excluir e realizar o sign-out automaticamente
    expect(page.getByText("Excluir")).toBeVisible();
    await page.getByRole("button", { name: "Excluir" }).click();

    // 4) um toast é exibido confirmando a remoção do usuário
    expect(page.getByText("Usuário removido com sucesso!")).toBeTruthy();
});
