"use client"
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeContext, ThemeProvider } from "@/contexts/ThemeContext";

const Page = () =>{
  return(
    <ThemeProvider>
      <Container>
        <ThemeSwitch/>
        <header className=" py-5">
          <h1 className="text-3xl">Titulo da Pagina</h1>
        </header>
        <section>
          <p className="my-5">
              Conteudo da Pagina
          </p>
          <Button label="Clique aqui" onClick={()=>{}}/>
        </section>
      </Container>
    </ThemeProvider>
  )
}

export default Page;