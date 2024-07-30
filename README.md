# Secret Word 🎮

<br>
<p>Bem vindo ao jogo Secret Word. 👋🏻</p>

<p>O Secret Word é um projeto aplicado no curso React do zero a maestria do grande professor <a href="https://github.com/matheusbattisti/"  target="_blank"> Matheus Batisti 🔗</a> encontrado na plataforma <a href="https://horadecodar.com.br/"  target="_blank"> Hora de codar 🔗</a>.</p>

<p>Deploy: <a href="https://gleydsonlucena.github.io/secret_word/"  target="_blank"> Jogar agora</a> 🔗</p>

## Tecnologias utilizadas </>

<br>

<ul>
  <li>ReactJS - com Vite ⚛</li>
  <li>Sass</li>
  <li>React Router Dom 🌐</li>
</ul>

## Descriçao do projeto 📃

<br>

<p>O jogo tem como objetivo o jogador descobrir a palavra, para isso deve palpitar letras, até descobrir e completar a palavra, contendo 3 tentativas, e um score(pontuação), cada letra descoberta, é somado +100 pontos no score.</p>

<div style="display: flex; justify-content: center; align-items: end;gap: 2rem; margin-bottom: 3rem">
  <img width="100px" src="./public/img/mobile.png"/>
  <img width="100px" src="./public/img/tablet.png"/>
  <img width="200px" src="./public/img/desktop.png"/>
</div>

## Demonstração:

<br>

<div style="margin: 3rem auto; ">
  <div>
  <img width="100%" src="./public/gif/desktop.gif"/>
  </div>
</div>

## Upgrades e aprendizados 🚀

<br>

<p>A princípio o projeto aplicado pelo professor era um pouco mais simples, poŕem, eu quis me desafiar e implementar coisas a mais.</p>

### Implementações: 🛠️

<ul>
  <li>Roteamento por links entre as páginas, com react-router-dom.</li>

  <li>Utilização de estados entre todo o componente App, com Context API(useContext).</li>

  <li>Implementação do "score" ao finalizar o jogo.</li>

  <li>Aplimoramento das "Win Conditional", caso ganhe, renderize "Você ganhou", caso contrário "Você perdeu" no componente de GameOver, utilizando essa mesma validação, o score continua somando, ou zera tudo em caso de derrota.</li>

  <li>Implementação de validações mais robustas no input.</li>

  <li>E um novo desing para praticar um pouco de Sass. 😜
</li>
</ul>
