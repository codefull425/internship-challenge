# Frontend - Calculadora de MMC

Interface React para calcular o Mínimo Múltiplo Comum (MMC) de um intervalo de números.

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca para construção da interface
- **Vite 7.1.7** - Build tool e dev server
- **Formik 2.4.5** - Gerenciamento de formulários
- **Yup 1.3.3** - Validação de schemas
- **Fetch API** - API nativa do JavaScript para requisições HTTP

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🎯 Executar

```bash
# Modo desenvolvimento (porta 5173)
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🔧 Configuração

### Conectar com o Backend

O frontend está configurado para se conectar ao backend em `http://localhost:8000`.

Se o backend estiver em outra URL, edite o arquivo `src/components/CalculationForm.jsx`:

```javascript
const response = await fetch('http://localhost:8000/api/calculate/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    x: parseInt(values.x),
    y: parseInt(values.y)
  })
});
```

## 📋 Funcionalidades

### Validações do Formulário

- ✅ Campos obrigatórios
- ✅ Apenas números inteiros positivos
- ✅ Y deve ser maior ou igual a X
- ✅ Feedback visual de erros
- ✅ Desabilita botão se formulário inválido

### Interface

- ✅ Design moderno e responsivo
- ✅ Animações suaves
- ✅ Feedback de loading durante cálculo
- ✅ Exibição clara do resultado
- ✅ Tratamento de erros do backend

## 🎨 Componentes

### MainCard
Card principal que envolve o conteúdo com estilo moderno e sombras.

### CalculationForm
Formulário completo com:
- Campos de entrada (X e Y)
- Validação com Formik e Yup
- Botão de submit com loading
- Exibição de resultados
- Tratamento de erros

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🧪 Testando

1. Certifique-se de que o backend está rodando:
```bash
cd ../calculationBackend
python manage.py runserver 0.0.0.0:8000
```

2. Inicie o frontend:
```bash
npm run dev
```

3. Acesse: http://localhost:5173

4. Teste com os valores:
   - X: 1, Y: 10 → Resultado esperado: 2520
   - X: 5, Y: 15 → Resultado esperado: 360360

## 🐛 Solução de Problemas

### Erro de CORS
Se aparecer erro de CORS, verifique se o backend tem `django-cors-headers` instalado e configurado.

### Backend não responde
Certifique-se de que:
- O backend está rodando na porta 8000
- Não há firewall bloqueando a porta
- A URL no código está correta

### Dependências não instaladas
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licença

Este projeto faz parte do desafio de estágio da Salutho.
