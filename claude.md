# 📘 Projeto: Glossário Interativo de Programação

## 🧠 Visão Geral

Este projeto consiste no desenvolvimento de uma aplicação web interativa voltada para iniciantes em tecnologia, com foco em explicar termos técnicos de programação (em inglês) de forma simples, visual e progressiva.

A aplicação utilizará animações, níveis de explicação e interatividade para facilitar a compreensão de conceitos complexos.

---

## 🎯 Objetivos

### Objetivo Geral

Criar uma aplicação web moderna que auxilie no aprendizado de termos técnicos da programação de forma acessível.

### Objetivos Específicos

* Explicar termos técnicos em inglês com tradução e contexto em português
* Utilizar analogias visuais para facilitar o entendimento
* Implementar animações interativas com Framer Motion
* Oferecer múltiplos níveis de explicação (fácil, médio e técnico)
* Criar uma experiência fluida e intuitiva

---

## 👥 Público-Alvo

* Iniciantes em programação
* Estudantes de tecnologia
* Pessoas sem conhecimento técnico
* Usuários autodidatas

---

## 🧩 Funcionalidades

### 📌 Glossário Interativo

* Lista de termos técnicos (mínimo de 10)
* Exibição em formato de cards

---

### 📌 Níveis de Explicação

Cada termo terá três níveis:

* 🟢 Fácil → analogia simples
* 🟡 Médio → explicação estruturada
* 🔴 Técnico → definição formal

---

### 📌 Animações (Framer Motion)

Cada termo possuirá uma animação explicativa:

Exemplos:

* API → fluxo de requisição e resposta
* Database → armazenamento e busca de dados
* Login → autenticação com cadeado
* Cloud → envio e recuperação de arquivos

---

### 📌 Interatividade

* Botões para alternar níveis de explicação
* Animações acionadas por clique ou hover
* Navegação entre termos
* Feedback visual ao usuário

---

### 📌 Componentização

* Componentes reutilizáveis para termos
* Separação clara de lógica e UI

---

## 🛠️ Stack Tecnológica

### Frontend

* React Vite
* Tailwind CSS
* Framer Motion

### Gerenciamento de Estado

* useState / useContext (inicialmente)
* Possível evolução para Zustand ou Redux

---

## 🧱 Estrutura do Projeto

```
/src
│── /components
│   ├── TermCard.jsx
│   ├── LevelSwitcher.jsx
│   ├── AnimationBox.jsx
│
│── /data
│   ├── terms.js
│
│── /pages
│   ├── Home.jsx
│
│── /styles
│   ├── globals.css
│
│── App.jsx
│── main.jsx
```

---

## 📊 Estrutura de Dados

```javascript
export const terms = [
  {
    id: 1,
    name: "API",
    easy: "É como um mensageiro que leva pedidos e traz respostas.",
    medium: "Permite comunicação entre sistemas.",
    hard: "Interface que define regras de comunicação entre softwares.",
    animation: "api"
  }
];
```

---

## 🎨 Design e UX

* Interface minimalista
* Uso de cores para níveis:

  * Verde → fácil
  * Amarelo → médio
  * Vermelho → técnico
* Layout responsivo
* Animações suaves e não intrusivas

---

## 🎬 Animações (Exemplo com Framer Motion)

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo do termo
</motion.div>
```

---

## 📌 Diferencial do Projeto

O projeto vai além de um glossário tradicional, oferecendo:

* Aprendizado visual
* Interação direta
* Explicações progressivas
* Experiência moderna de UI/UX

---

## 🏁 Conclusão

O Glossário Interativo de Programação busca tornar o aprendizado técnico acessível, intuitivo e envolvente, utilizando tecnologias modernas e abordagens visuais para melhorar a retenção de conhecimento.

---
