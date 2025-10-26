import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/CalculationForm.css';

const CalculationForm = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Schema de validação com Yup
  const validationSchema = Yup.object({
    x: Yup.number()
      .required('O campo X é obrigatório')
      .positive('X deve ser um número positivo')
      .integer('X deve ser um número inteiro')
      .min(1, 'X deve ser maior que 0'),
    y: Yup.number()
      .required('O campo Y é obrigatório')
      .positive('Y deve ser um número positivo')
      .integer('Y deve ser um número inteiro')
      .min(1, 'Y deve ser maior que 0')
      .test('is-greater', 'Y deve ser maior ou igual a X', function(value) {
        const { x } = this.parent;
        return !x || !value || value >= x;
      })
  });

  // Valores iniciais do formulário
  const initialValues = {
    x: '',
    y: ''
  };

  // Função para enviar o formulário
  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
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

      const data = await response.json();

      if (!response.ok) {
        // Se a resposta não for ok (status 4xx ou 5xx)
        setError(data.error || 'Erro ao processar a requisição.');
      } else {
        setResult(data);
      }
    } catch {
      setError('Erro ao conectar com o servidor. Verifique se o backend está rodando na porta 8000.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="calculation-form">
      <h1 className="form-title">Calculadora de MMC</h1>
      <p className="form-subtitle">
        Calcule o Mínimo Múltiplo Comum de um intervalo
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="x" className="form-label">
                Número inicial (X)
              </label>
              <Field
                type="number"
                id="x"
                name="x"
                className="form-input"
                placeholder="Digite o número inicial"
              />
              <ErrorMessage name="x" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="y" className="form-label">
                Número final (Y)
              </label>
              <Field
                type="number"
                id="y"
                name="y"
                className="form-input"
                placeholder="Digite o número final"
              />
              <ErrorMessage name="y" component="div" className="error-message" />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting || !isValid || !dirty || loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Calculando...
                </>
              ) : (
                'Calcular MMC'
              )}
            </button>
          </Form>
        )}
      </Formik>

      {/* Exibir erro */}
      {error && (
        <div className="result-card error-card">
          <div className="result-icon error-icon">⚠️</div>
          <h3 className="result-title">Erro</h3>
          <p className="result-message">{error}</p>
        </div>
      )}

      {/* Exibir resultado */}
      {result && (
        <div className="result-card success-card">
          <div className="result-icon success-icon">✓</div>
          <h3 className="result-title">Resultado</h3>
          <div className="result-content">
            <p className="result-interval">
              Intervalo: <strong>{result.interval}</strong>
            </p>
            <p className="result-value">
              MMC = <strong className="result-number">{result.result.toLocaleString()}</strong>
            </p>
          </div>
          <p className="result-explanation">
            O número <strong>{result.result.toLocaleString()}</strong> é o menor número inteiro 
            divisível por todos os números do intervalo {result.interval}.
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculationForm;

