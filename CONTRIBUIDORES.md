# 🤝 Guia de Contribuição - CodeGloss

Obrigado por querer contribuir com o projeto CodeGloss! Este documento descreve como adicionar novos termos técnicos ao glossário.

---

## 📋 Regras Simples

1. **Um termo por Pull Request** - Facilita a revisão e manutenção
2. **Qualidade das explicações** - Mantenha as analogias simples e claras
3. **Nomes em inglês** - Os termos devem estar em inglês
4. **Arquivos bem formatados** - JSON válido e bem estruturado
5. **Sem plágio** - Crie explicações originais baseadas em sua compreensão
6. **Teste antes de enviar** - Certifique-se de que o app continua funcionando

---

## 🌿 Git Workflow - Criar uma Branch

> ⚠️ **IMPORTANTE:** Sempre trabalhe em uma branch separada. Nunca faça alterações diretamente na branch `main` ou `master`.

### Passo 1: Criar e Mudar para uma Nova Branch

```bash
# Atualize a branch main
git checkout main
git pull origin main

# Crie uma nova branch com um nome descritivo
git checkout -b adicionar-termo-[NOME]

# Exemplo: adicionar termo "Cache"
git checkout -b adicionar-termo-cache
```

### Passo 2: Fazer as Alterações

Agora você pode criar o arquivo JSON do novo termo.

### Passo 3: Commit e Push

```bash
# Adicione os arquivos modificados
git add src/data/terms/[arquivo].json

# Faça commit com mensagem clara
git commit -m "feat: adiciona termo [NOME_DO_TERMO]"

# Envie para o repositório remoto
git push origin adicionar-termo-[NOME]
```

### Passo 4: Criar Pull Request

Após fazer push, acesse o repositório no GitHub e clique em "New Pull Request" ou "Compare & Pull Request". Isso abrirá uma PR com sua branch.

---

## 📝 Como Adicionar um Novo Termo

### Passo 1: Criar o arquivo JSON

1. Navegue até a pasta `src/data/terms/`
2. Crie um novo arquivo JSON com o nome do termo em minúsculas
3. Use o seguinte template:

```json
{
  "id": [PRÓXIMO_ID],
  "name": "NomeDaTermo",
  "easy": "Explicação simples usando analogia do dia a dia",
  "medium": "Explicação intermediária com termos técnicos básicos",
  "hard": "Explicação técnica detalhada com jargão profissional",
  "animation": "nomeDaAnimacao"
}
```

#### Exemplos de Preenchimento:

**Fácil (Easy):**
- Use analogias do mundo real
- Máximo 1 frase
- Evite jargão técnico

**Médio (Medium):**
- Explicação estruturada
- 1-2 frases
- Introduza termos técnicos

**Técnico (Hard):**
- Definição formal e precisa
- Pode ser mais longo
- Use terminologia profissional

---

### Passo 2: Definir a Animação

O campo `animation` deve ser o nome da animação (em minúsculas, sem espaços).

**Animações disponíveis:**
- `api` - Fluxo de requisição e resposta
- `database` - Armazenamento e busca de dados
- `login` - Autenticação com cadeado
- `cloud` - Envio e recuperação de arquivos
- `frontend` - Interface do usuário
- `backend` - Processamento no servidor
- `framework` - Construção/montagem
- `git` - Controle de versão
- `http` - Transferência de dados
- `json` - Estruturação de dados
- `variable` - Armazenamento em caixa
- `function` - Execução de tarefa

Se precisar de uma animação diferente, mencione no PR.

---

### Passo 3: Atualizar o ID

O `id` deve ser sequencial:
- Verifique qual é o maior ID atual em `src/data/terms/`
- Incremente em 1

Exemplo: Se o último termo tem `id: 12`, o novo deve ter `id: 13`

---

### Passo 4: Validar o JSON

Certifique-se de que o arquivo JSON é válido:
- Sem vírgulas extras
- Todas as chaves entre aspas
- Strings entre aspas duplas

Você pode validar em: https://jsonlint.com

---

### Passo 5: Testar Localmente

```bash
# Instale as dependências (se não tiver)
npm install

# Execute o projeto
npm run dev

# Verifique se o novo termo aparece no site
```

---

## 🔄 Exemplos Práticos

### Exemplo 1: Adicionar "Cache"

**Arquivo:** `src/data/terms/cache.json`

```json
{
  "id": 13,
  "name": "Cache",
  "easy": "É como manter à mão os itens que você usa frequentemente para acessar mais rápido.",
  "medium": "Memória rápida que armazena dados frequentemente acessados para reduzir o tempo de acesso.",
  "hard": "Camada de memória de alta velocidade (geralmente RAM) que armazena cópias de dados de acesso frequente, implementando políticas de substituição (LRU, FIFO) para otimizar hit rates e reduzir latência.",
  "animation": "cache"
}
```

### Exemplo 2: Adicionar "Algorithm"

**Arquivo:** `src/data/terms/algorithm.json`

```json
{
  "id": 14,
  "name": "Algorithm",
  "easy": "É como uma receita de bolo - um passo a passo que leva a um resultado final.",
  "medium": "Sequência ordenada de instruções para resolver um problema ou realizar uma tarefa.",
  "hard": "Procedimento computacional bem-definido que aceita entrada, executa uma sequência finita de operações determinísticas e produz saída, caracterizado por complexidade temporal e espacial analisáveis.",
  "animation": "algorithm"
}
```

---

## 📤 Enviar Pull Request

### Checklist Antes de Fazer PR

- [ ] Criei o arquivo JSON em `src/data/terms/`
- [ ] O JSON está formatado corretamente
- [ ] Usei um ID único e sequencial
- [ ] As três explicações estão bem escritas
- [ ] Testei localmente e funcionou
- [ ] Meu termo não é duplicado
- [ ] Segui o template do PR

Veja o **[template de Pull Request](PR_TEMPLATE.md)** para mais detalhes sobre como estruturar sua contribuição.

---

## 🐛 Problemas Comuns

### JSON inválido
**Erro:** Aplicação não inicia ou termo não aparece

**Solução:** Valide o JSON em https://jsonlint.com

### Termo não aparece
**Erro:** Adicionei o arquivo mas o termo não aparece na lista

**Solução:** 
- Reinicie o servidor (`npm run dev`)
- Verifique se o JSON está em `src/data/terms/`
- Confirme se o JSON é válido

### ID duplicado
**Erro:** O termo aparece mas com problema

**Solução:** Use um ID único e sequencial

---

## 💡 Dicas

- **Analogias:** Use exemplos que as pessoas não-técnicas entendem
- **Clareza:** Quanto mais clara a explicação fácil, melhor
- **Progressão:** Fácil → Médio → Técnico deve crescer em complexidade
- **Pesquisa:** Leia sobre o termo antes de explicar
- **Revisão:** Peça para alguém revisar suas explicações

---

## 📞 Dúvidas?

Se tiver dúvidas ou sugestões, abra uma issue ou entre em contato com os mantenedores do projeto.

---

**Obrigado por contribuir! 🎉**
