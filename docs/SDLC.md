# College Acceptance Chance Calculator — SDLC

## 1. Objetivo y alcance

Crear una SPA móvil primero que recopile GPA, SAT y universidad, ejecute una estimación explicable y entregue una tarjeta social descargable. La primera versión es recreativa: no representa una decisión real de admisión.

## 2. Requisitos

- Funcionales: formulario en cuatro pasos, validación, búsqueda de universidades, API de cálculo, espera mínima de dos segundos, resultado, descarga PNG, compartir y reiniciar.
- No funcionales: accesibilidad WCAG AA, respuesta móvil desde 320 px, API menor a 300 ms p95 (sin espera visual), separación de dominio/UI, observabilidad y protección de datos.
- Fuera de MVP: cuentas, expedientes persistentes, recomendaciones personalizadas y modelos predictivos entrenados.

## 3. Análisis y riesgos

- Una cifra puede parecer autoritativa. Mitigación: disclaimer visible, límites 2–96% y lenguaje de estimación lúdica.
- GPA/SAT no capturan el contexto. Mitigación: documentar variables, no guardar datos y calibrar antes de producción.
- Web Share no existe en todos los navegadores. Mitigación: fallback al portapapeles y descarga PNG.

## 4. Arquitectura

- Frontend: React + TypeScript + Tailwind; SPA con `CalculatorContext` y reducer.
- Backend primero: `POST /api/calculate`, validación de contrato y función de dominio pura.
- Persistencia: ninguna en MVP; el estado vive en memoria del navegador.
- Evolución: API versionada, catálogo en base de datos y motor de puntuación intercambiable.

## 5. Diseño

Flujo lineal `academics → college → calculating → result`; componentes por responsabilidad, inputs accesibles y tarjeta 1:1 preparada para redes. Paleta oscura con lima como señal de progreso y acción.

## 6. Desarrollo por sprints

### Sprint 0 — Fundaciones (2 días)

- Contrato de API, tipos del dominio, catálogo inicial y criterios de aceptación.
- Repositorio, CI, entornos y estrategia de pruebas.
- Definition of Done: contrato revisado y build reproducible.

### Sprint 1 — Backend MVP (1 semana)

- `POST /api/calculate`, validaciones de GPA/SAT/universidad y errores consistentes.
- Motor determinista con reglas de prestigio y tests unitarios/de contrato.
- Logging sin PII, rate limiting y documentación OpenAPI.
- Definition of Done: contrato estable, cobertura del dominio ≥90% y p95 <300 ms.

### Sprint 2 — Frontend y flujo (1 semana)

- Estado centralizado, pasos académicos/universidad/cálculo/resultado.
- Validación inline, búsqueda, animaciones reducidas y diseño responsive.
- Definition of Done: recorrido completo por teclado y 320/768/1440 px.

### Sprint 3 — Viralidad y calidad (1 semana)

- Canvas PNG, Web Share/fallback, analytics de eventos anónimos.
- E2E, accesibilidad, performance y manejo de fallos de API.
- Definition of Done: Lighthouse ≥90 y pruebas críticas verdes.

### Sprint 4 — Producción y aprendizaje (3 días)

- Despliegue gradual, dashboards, alertas, runbook y rollback.
- Medición: tasa de finalización, descarga, share y error.
- Definition of Done: SLO definidos, monitoreo activo y revisión post-release.

## 7. Implementación inicial

Este repositorio ya implementa el contrato backend, la función de dominio, el estado centralizado y los cuatro pasos. El cálculo es deliberadamente mock y sustituible.

## 8. Pruebas

- Unitarias: límites, reglas de universidades élite y clasificación reach/target/likely.
- Integración: payload válido/inválido de `/api/calculate`.
- E2E: validación, navegación, búsqueda, cálculo, reinicio, descarga y fallback de compartir.

## 9. Despliegue y operación

Build inmutable, despliegue preview, smoke test, promoción y rollback. No registrar GPA/SAT. Alertar por error rate >2% o p95 >500 ms.

## 10. Mantenimiento

Revisión mensual del catálogo, auditoría trimestral de accesibilidad y sesgo, actualización de dependencias y versionado del algoritmo. Cualquier modelo real exige dataset documentado, validación estadística y revisión ética.
