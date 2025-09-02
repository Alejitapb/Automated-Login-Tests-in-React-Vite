# 🍗 Cali Pollo Delivery - Sistema de Pedidos Web

¡Bienvenido al repositorio oficial del sistema de pedidos en línea **Cali Pollo Delivery**! 🚀  
Una aplicación moderna desarrollada con **React + Vite** en el frontend y **Node.js + Express** en el backend, enfocada en comida típica colombiana. 🇨🇴

---

## 📋 Actualización al 2 de septiembre de 2025

### ✨ Nuevas Funcionalidades Implementadas:
- ✅ Sistema completo de pruebas automatizadas  
- ✅ Pruebas unitarias y de integración para backend  
- ✅ Pruebas de componentes y hooks para frontend  
- ✅ Configuración de Jest y React Testing Library  
- ✅ Reportes de cobertura de código  

---

## 🧪 Sistema de Pruebas Automatizadas

### 🔹 Tipos de Pruebas de Software Implementadas

1. **Pruebas Unitarias (Backend)**  
   - **Características:** Pruebas individuales de funciones, modelos y controladores  
   - **Beneficios:** Detección temprana de errores, código más confiable  
   - **Ejemplos:** Validación de modelos `User`, `Product`, `Order`  

2. **Pruebas de Integración (Backend)**  
   - **Características:** Pruebas de interacción entre módulos y APIs  
   - **Beneficios:** Verificación de flujos completos, endpoints funcionando correctamente  
   - **Ejemplos:** Pruebas de rutas de autenticación, gestión de pedidos  

3. **Pruebas de Componentes (Frontend)**  
   - **Características:** Pruebas de componentes React de forma aislada  
   - **Beneficios:** UI consistente, detección de errores visuales  
   - **Ejemplos:** `Header`, `LoginForm`, `ProductCard`  

4. **Pruebas de Hooks (Frontend)**  
   - **Características:** Pruebas de custom hooks de React  
   - **Beneficios:** Lógica de estado confiable, reutilización garantizada  
   - **Ejemplos:** `useCart`, `useAuth`  

---

### 🔹 Pruebas Adaptadas al Proyecto

**Backend (Node.js/Express):**
- ✅ Pruebas de rutas de API con **Supertest**  
- ✅ Pruebas de modelos de base de datos  
- ✅ Pruebas de middleware de autenticación  
- ✅ Pruebas de controladores  

**Frontend (React/Vite):**
- ✅ Pruebas de componentes con **React Testing Library**  
- ✅ Pruebas de interacción de usuario con **user-event**  
- ✅ Pruebas de contextos y hooks personalizados  
- ✅ Pruebas de llamadas a APIs mockeadas  

---

### 🔹 Dependencias de Testing Utilizadas

**Backend:**
```json
"devDependencies": {
  "jest": "^29.7.0",
  "supertest": "^6.3.4",
  "@types/jest": "^29.5.14"
}
```
**Frontend**
```json
"devDependencies": {
  "jest": "^30.1.3",
  "jest-environment-jsdom": "^30.1.2",
  "@testing-library/react": "^16.3.0",
  "@testing-library/jest-dom": "^6.8.0",
  "@testing-library/user-event": "^14.6.1",
  "@babel/core": "^7.28.3",
  "@babel/preset-env": "^7.28.3",
  "babel-jest": "^30.1.2"
}
```
---
## 🖼️ Preview de pruebas Frontend
>
![Vista previa Frontend](https://drive.google.com/uc?export=view&id=1qDq_zI7ikpwRzhvZORMkSPbHjV0p5bTt)

---

## 🖼️ Preview de pruebas Backend
>
![Vista previa Backend](https://drive.google.com/uc?export=view&id=1HBXU0Wj8BoWCCmlb_pkX2CJHInWD5Y9e)
---
## 🧰 Stack Tecnológico

### 🔹 Frontend
- ⚛️ React 18 + Vite
- 🎨 CSS personalizado con paleta de colores: Amarillo, Naranja y Rojo
- 🌐 React Router DOM
- 🔐 OAuth con [`jwt-decode v3.1.2`](https://cdnjs.cloudflare.com/ajax/libs/jwt-decode/3.1.2/jwt-decode.min.js)
- 📦 Axios para peticiones HTTP

### 🔹 Backend
- 🖥️ Node.js + Express
- 🔐 JWT + Passport (Google y Facebook)
- 🧂 bcryptjs para hashing de contraseñas
- 🛡️ Helmet, CORS y Rate Limiting
- 📁 Multer (carga de archivos)

### 🔹 Base de Datos
- 🗄️ MySQL / MariaDB
- ⚙️ Script SQL ubicado en `database/schema.sql`

---
### ✨ Funcionalidades clave

- 🔐 Login/Registro con OAuth y tradicional
- 🍽️ Menú de productos dinámico
- 🛒 Carrito de compras persistente
- 📦 Gestión de pedidos por estados
- ⭐ Reseñas y calificaciones
- 📊 Panel administrativo (inventario, reportes, productos)
- 🆘 Sistema de soporte técnico
- 📱 Diseño responsive
- 🌐 Funcionalidad offline básica

---

### 🎨 Paleta de Colores

| Color        | Hex        | Uso principal                  |
|--------------|------------|-------------------------------|
| 🟡 Amarillo   | `#FFD700`  | Elementos destacados           |
| 🟠 Naranja    | `#FF8C00`  | Botones principales            |
| 🔴 Rojo       | `#FF4500`  | Alertas y elementos críticos   |

---

## 🧑‍💻 Autora

👩‍💻 **Alejandra Pabón Barbosa**  
📧 Contacto: pabonalejandra8@gmail.com  
🔗 Proyecto académico **SENA - Ficha 2885494**

---

### 📝 Licencia

Este proyecto está licenciado bajo **MIT License**.  
Uso libre con fines académicos, personales o empresariales. 🍽️


---

### 📁 Estructura del Proyecto

```plaintext
cali-pollo-delivery/
├── backend/
│   ├── __test__/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── images/
│   │       └── logo-cali-pollo.png
│   ├── src/
│   │   ├── __test__/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── database/
│   └── schema.sql
├── .env
├── README.md
└── package.json
