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

1. **NUNCA** marque uma tarefa como concluída sem implementá-la completamente
2. **SEMPRE** solicite confirmação antes de marcar como concluída
3. **MANTENHA** o conteúdo original da tarefa ao marcar como concluída
4. **ADICIONE** apenas o cabeçalho de status e resumo de resultados
5. **VALIDE** tecnicamente antes de solicitar confirmação

---

**Este sistema garante transparência, rastreabilidade e qualidade em todas as implementações do projeto.**
