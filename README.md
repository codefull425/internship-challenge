

---

## 🚀 Como Executar a Aplicação

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

#### Backend (Django)
- **Python 3.8 ou superior** - [Download Python](https://www.python.org/downloads/)
- **pip** (gerenciador de pacotes Python) - geralmente vem com Python

Para verificar se estão instalados:
```bash
python --version
pip --version
```


---

### 📦 Instalação e Execução do Backend

1. **Navegue até a pasta do backend:**
```bash
cd calculationBackend
```

2. **Instale as dependências Python:**
```bash
pip install -r requirements.txt
```

As dependências incluem:
- Django 5.2.7
- djangorestframework
- django-cors-headers

3. **Inicie o servidor Django:**
```bash
python manage.py runserver 0.0.0.0:8000
```

O servidor estará rodando em: **http://localhost:8000**

**Nota:** O servidor sempre deve rodar na porta **8000** para que o frontend possa se conectar corretamente.

---

### 📡 Testando a API

#### Endpoint Disponível

**POST** `/api/calculate/`

**Request Body (JSON):**
```json
{
  "x": 1,
  "y": 10
}
```

**Response (JSON):**
```json
{
  "interval": "1 - 10",
  "result": 2520
}
```

#### Validações:
- `x` e `y` devem ser números inteiros positivos (> 0)
- Se `x > y`, os valores são invertidos automaticamente

#### Erro (400 Bad Request):
```json
{
  "error": "Envie números inteiros positivos válidos para 'x' e 'y'."
}
```

---



### 🧪 Testando com Postman

1. **Método:** POST
2. **URL:** `http://localhost:8000/api/calculate/`
3. **Headers:**
   - Key: `Content-Type`
   - Value: `application/json`
4. **Body:** (selecione `raw` e `JSON`)
```json
{
  "x": 1,
  "y": 10
}
```

---



### 📁 Estrutura do Projeto

```
internship-challenge-backend/
├── calculationBackend/           # Projeto Django
│   ├── api/                      # App da API
│   │   ├── services/             # Lógica de negócio
│   │   │   └── calculation_service.py  # Cálculo do MMC
│   │   └── views/                # Endpoints da API
│   │       └── calculation_view.py     # View do cálculo
│   ├── calculationBackend/       # Configurações do Django
│   │   ├── settings.py          # Configurações do projeto
│   │   └── urls.py              # Rotas da API
│   ├── manage.py                # CLI do Django
│   └── requirements.txt         # Dependências Python
└── README.md                    # Este arquivo
```

---

### 🔧 Solução de Problemas

#### Erro: "Port 8000 is already in use"
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F



#### Erro: "Module not found"
Certifique-se de instalar todas as dependências:
```bash
pip install -r requirements.txt
```

#### Erro de CORS no Frontend
O backend já está configurado com `django-cors-headers` para aceitar requisições de qualquer origem durante o desenvolvimento.

---

