# GitHub Copilot - Instruções do Projeto

## Sistema de Gerenciamento de Tarefas

### Como Funciona a Marcação de Tarefas

Este projeto utiliza um sistema de arquivos de tarefa localizados em `.ai/tasks/` para documentar e rastrear implementações. Cada tarefa segue um ciclo de vida específico:

#### 1. Estado Inicial - Tarefa Pendente
```markdown
# Tarefa: [Título Descritivo]

## Objetivo
[Descrição do que precisa ser implementado]

## Análise do Estado Atual
[Análise detalhada do código atual]

## Passos de Implementação
[Lista sequencial de todos os passos necessários]
```

#### 2. Estado Final - Tarefa Concluída
```markdown
# ✅ CONCLUÍDA - Tarefa: [Título Descritivo]

**Status**: ✅ CONCLUÍDA  
**Data de Conclusão**: [YYYY-MM-DD]  
**Implementado por**: [GitHub Copilot/Nome do Desenvolvedor]  

## Objetivo
[Objetivo original mantido]

## Resultado da Implementação
✅ **Sucesso**: [Resumo dos resultados]
- ✅ [Passo 1 concluído]
- ✅ [Passo 2 concluído]
- ✅ [Validações realizadas]
```

### Critérios para Marcação Como Concluída

Uma tarefa deve ser marcada como ✅ CONCLUÍDA apenas quando:

1. **Todos os passos** definidos foram implementados
2. **Validação TypeScript** passou sem erros
3. **Funcionalidade testada** e funcionando conforme esperado
4. **Retrocompatibilidade** verificada (quando aplicável)
5. **Código commitado** (se aplicável)

## Fluxo de Confirmação de Conclusão

### ⚠️ IMPORTANTE: Verificação do Working Tree

**Antes de implementar qualquer tarefa, o GitHub Copilot DEVE:**

1. **Verificar o estado do Git** para garantir working tree limpo
2. **Solicitar commit/stage** se houver mudanças pendentes
3. **Confirmar que é seguro** prosseguir com a implementação

### Comando de Verificação Obrigatório:

```bash
git status --porcelain
```

**Interpretação dos resultados:**
- **Vazio**: Working tree limpo ✅ - Pode prosseguir
- **Com saída**: Há mudanças pendentes ⚠️ - PARAR e solicitar ação

### Exemplo de Verificação de Segurança:

```
## 🔍 Verificação de Working Tree

Verificando se é seguro implementar a tarefa...

**ATENÇÃO**: Detectadas mudanças não commitadas:
- M src/components/Component.tsx
- ?? src/new-file.tsx

**AÇÃO NECESSÁRIA**:
Antes de prosseguir com a implementação, você precisa:

1. **Commitir as mudanças**:
   ```bash
   git add .
   git commit -m "sua mensagem de commit"
   ```

2. **OU fazer stage das mudanças**:
   ```bash
   git add .
   ```

3. **OU usar stash para salvar temporariamente**:
   ```bash
   git stash push -m "mudanças temporárias"
   ```

Posso prosseguir com a implementação após você resolver essas pendências?
```

### ⚠️ IMPORTANTE: Confirmação Obrigatória

**Antes de marcar qualquer tarefa como concluída, o GitHub Copilot DEVE:**

1. **Implementar completamente** todos os passos definidos
2. **Validar tecnicamente** a implementação
3. **Solicitar confirmação explícita** ao usuário

### Exemplo de Solicitação de Confirmação:

```
## ✅ Implementação Concluída

Todos os passos da tarefa foram implementados com sucesso:
- ✅ [Lista detalhada dos passos realizados]
- ✅ Validação TypeScript: Sem erros
- ✅ Funcionalidade testada

**CONFIRMAÇÃO NECESSÁRIA**: 
Posso marcar esta tarefa como ✅ CONCLUÍDA no arquivo `.ai/tasks/[nome-da-tarefa].md`?

A marcação incluirá:
- Status de conclusão
- Data atual
- Resumo dos resultados
- Validações realizadas
```

### Estrutura do Cabeçalho de Tarefa Concluída

```markdown
# ✅ CONCLUÍDA - Tarefa: [Título Original]

**Status**: ✅ CONCLUÍDA  
**Data de Conclusão**: YYYY-MM-DD  
**Implementado por**: GitHub Copilot  

## Objetivo
[Objetivo original inalterado]

## Resultado da Implementação
✅ **Sucesso**: [Descrição dos resultados]
- ✅ [Cada passo implementado listado]
- ✅ [Validações técnicas realizadas]
- ✅ [Verificações de qualidade]

## [Resto do conteúdo original mantido]
```

## Benefícios do Sistema

### Para o Desenvolvedor:
- **Rastreabilidade**: Histórico claro de todas as implementações
- **Documentação**: Cada mudança é documentada automaticamente
- **Revisão**: Fácil revisão do que foi implementado vs. planejado
- **Aprendizado**: Padrões e decisões técnicas documentadas

### Para o Projeto:
- **Auditoria**: Capacidade de auditar mudanças realizadas
- **Onboarding**: Novos desenvolvedores podem entender o histórico
- **Debugging**: Facilita identificação de quando mudanças foram feitas
- **Planejamento**: Base para estimativas futuras

## Comandos Úteis

### Para Listar Tarefas Pendentes:
```bash
find .ai/tasks -name "*.md" -exec grep -L "✅ CONCLUÍDA" {} \;
```

### Para Listar Tarefas Concluídas:
```bash
find .ai/tasks -name "*.md" -exec grep -l "✅ CONCLUÍDA" {} \;
```

### Para Ver Status de Uma Tarefa:
```bash
head -5 .ai/tasks/[nome-da-tarefa].md
```

## Regras Importantes

1. **NUNCA** implemente uma tarefa sem verificar `git status --porcelain` primeiro
2. **PARE** imediatamente se houver mudanças não commitadas e solicite ação do usuário
3. **NUNCA** marque uma tarefa como concluída sem implementá-la completamente
4. **SEMPRE** solicite confirmação antes de marcar como concluída
5. **MANTENHA** o conteúdo original da tarefa ao marcar como concluída
6. **ADICIONE** apenas o cabeçalho de status e resumo de resultados
7. **VALIDE** tecnicamente antes de solicitar confirmação
8. **COMMITIR** mudanças é responsabilidade do usuário, não do Copilot

## Fluxo Completo de Segurança

### 1. Verificação Inicial
```bash
git status --porcelain
```

### 2. Decisão Baseada no Resultado
- **Se vazio**: ✅ Prosseguir com implementação
- **Se não vazio**: ⚠️ PARAR e solicitar ação do usuário

### 3. Mensagem de Segurança (quando necessário)
```
🛑 **IMPLEMENTAÇÃO BLOQUEADA**

Working tree não está limpo. Detectadas mudanças pendentes.

Por favor, resolva as pendências antes de implementar novas funcionalidades.
```

## Benefícios da Verificação

### Evita Conflitos:
- **Mistura de mudanças**: Evita misturar implementações diferentes
- **Perda de trabalho**: Protege mudanças não salvas
- **Confusão de commits**: Mantém histórico limpo e organizado

### Facilita Debugging:
- **Isolamento**: Cada implementação fica isolada
- **Reversão**: Facilita reverter mudanças específicas
- **Revisão**: Commits focados e reviewáveis

---

**Este sistema garante transparência, rastreabilidade e qualidade em todas as implementações do projeto.**
