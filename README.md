# MyDrugs - E-commerce de Drogas Ilícitas (Projeto Fictício)

## 📋 Sobre o Projeto

**MyDrugs** é uma aplicação web fictícia inspirada na série de TV alemã **"How to Sell Drugs Online (Fast)"** da Netflix. Este projeto foi desenvolvido exclusivamente para fins educacionais e de demonstração de habilidades de desenvolvimento web, não representando nenhuma atividade ilegal real.

**Este é o frontend da aplicação, que possui um backend correspondente para gerenciar as funcionalidades do sistema.**

### 🎬 Inspiração
O projeto foi inspirado na série que conta a história de um adolescente que cria um império de venda de drogas online para impressionar sua ex-namorada. A aplicação simula uma plataforma de e-commerce para venda de substâncias ilícitas, utilizando criptomoedas como método de pagamento.

## 🚀 Tecnologias Utilizadas

- **React 19.0.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.7.2** - Superset do JavaScript com tipagem estática
- **Vite 6.3.1** - Build tool e dev server
- **Styled Components 6.1.17** - CSS-in-JS para estilização
- **React Router DOM 6.30.0** - Roteamento da aplicação
- **React Icons 5.5.0** - Biblioteca de ícones
- **Axios 1.8.4** - Cliente HTTP para requisições

## 🏗️ Arquitetura do Projeto

```
src/
├── assets/           # Imagens e recursos estáticos
├── Components/       # Componentes reutilizáveis
│   ├── Advertising/  # Componente de publicidade
│   ├── Cart/         # Carrinho de compras
│   ├── Header/       # Cabeçalho da aplicação
│   ├── Menu/         # Menu principal
│   ├── Safety/       # Informações de segurança
│   └── [PillTypes]/  # Componentes específicos de cada tipo de pílula
├── Contexts/         # Contextos React (Carrinho e Carteira)
├── Data/             # Dados estáticos (produtos e publicidade)
├── Pages/            # Páginas principais
├── Routes/           # Configuração de rotas
├── Services/         # Serviços e APIs
└── styles/           # Estilos globais e tema
```

## 🛍️ Funcionalidades Principais

### 1. **Catálogo de Produtos**
- 10 tipos diferentes de pílulas de MDMA
- Cada produto possui:
  - Nome e descrição
  - Dosagem em MG
  - Avaliação por estrelas
  - Preços em BTC e ETH
  - Imagem personalizada

### 2. **Sistema de Carrinho**
- Adicionar/remover produtos
- Cálculo automático de totais
- Suporte a múltiplas moedas (BTC/ETH)

### 3. **Sistema de Carteira Digital**
- Simulação de carteira com saldo em criptomoedas
- Processamento de pagamentos
- Validação de saldo

### 4. **Navegação**
- Menu principal com todas as categorias
- Páginas individuais para cada tipo de pílula
- Sistema de rotas dinâmico

### 5. **Páginas Informativas**
- FAQ (Perguntas Frequentes)
- Informações de Segurança
- Página de Contato
- Sistema de Login/Registro

## 📱 Responsividade

⚠️ **Importante**: A responsividade está sendo desenvolvida ainda. Atualmente, a aplicação foi otimizada para desktop.

### 🖥️ Resoluções Recomendadas

Para a melhor experiência de uso, recomendamos as seguintes resoluções:

#### **Desktop (Recomendado)**
- **1920x1080** (Full HD) - Resolução ideal
- **1366x768** (HD) - Resolução mínima
- **1440x900** (WXGA+) - Boa experiência
- **2560x1440** (2K) - Excelente qualidade

#### **Laptop**
- **1366x768** - Resolução padrão
- **1920x1080** - Resolução premium

#### **Desktop Antigo**
- **1280x720** (HD) - Funcional, mas não ideal
- **1024x768** - Mínimo aceitável

### 📐 Aspectos Importantes

- **Largura mínima**: 1024px
- **Altura mínima**: 768px
- **Proporção recomendada**: 16:9 ou 16:10
- **Zoom do navegador**: 100% (sem zoom)

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd MyDrugs

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linter
```

## 🎨 Produtos Disponíveis

1. **RED PILL** - 90MG MDMA
2. **GREEN SNOWFLAKE** - 120MG MDMA
3. **BLUE LAGOON** - 100MG MDMA
4. **PURPLE DREAM** - 150MG MDMA
5. **PINK SUNRISE** - 110MG MDMA
6. **MITSUBISHI RUSH** - 130MG MDMA
7. **SUPERMAN PILL** - 140MG MDMA
8. **CHICABULLS** - 125MG MDMA
9. **YELLOW FLASH** - 95MG MDMA
10. **SMILING PILL** - 105MG MDMA

## 🔒 Disclaimer Legal

⚠️ **AVISO IMPORTANTE**: Este projeto é **100% fictício** e foi criado exclusivamente para fins educacionais e de demonstração de habilidades de desenvolvimento web. 

- Não representa nenhuma atividade ilegal real
- Não promove ou incentiva o uso de drogas
- Não possui funcionalidade real de venda
- É apenas uma simulação para fins educacionais

## 👨‍💻 Desenvolvimento

### Estrutura de Componentes
- Componentes modulares e reutilizáveis
- Separação clara entre lógica e apresentação
- Uso de Context API para gerenciamento de estado
- Styled Components para estilização

### Padrões Utilizados
- TypeScript para tipagem estática
- React Hooks para gerenciamento de estado
- React Router para navegação
- Context API para estado global

## 📈 Próximos Passos

- [ ] Implementar responsividade completa
- [ ] Adicionar testes unitários
- [ ] Melhorar acessibilidade
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar animações mais elaboradas
- [ ] Implementar sistema de busca
- [ ] Adicionar filtros de produtos

## 🤝 Contribuição

Este é um projeto educacional. Contribuições são bem-vindas para melhorar a qualidade do código e adicionar novas funcionalidades educacionais.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Criado e desenvolvido por Felipe José de Lima**

**Desenvolvido com ❤️ para fins educacionais**
