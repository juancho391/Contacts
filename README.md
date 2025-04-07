# 📇 Contacts API

✍️ Notas

Este proyecto fue una práctica personal para reforzar mis habilidades con Django Rest Framework y entender mejor cómo construir APIs seguras, escalables y limpias.

Este proyecto es una **API RESTful** desarrollada con **Django** y **Django Rest Framework** que permite la gestión de contactos personales. Puedes crear, leer, actualizar y eliminar contactos fácilmente.

Fue creado como parte de mi proceso de aprendizaje en el desarrollo de APIs con Django.

---

## 🚀 Tecnologías Utilizadas

- 🐍 **Python 3**
- 🌐 **Django**
- 🛠️ **Django Rest Framework**
- 🧪 **SQLite** (como base de datos por defecto)
- 🧰 **Postman** (para pruebas de endpoints)

---

## 🧰 Funcionalidades

- 🔐 Autenticación de usuarios
- 📄 CRUD completo de contactos
- 🔍 Filtros y búsquedas básicas (por nombre, email, etc.)
- 🧩 Estructura clara y modular para escalar

---

## 📦 Instalación local

1. **Clona este repositorio**

```bash
git clone https://github.com/juancho391/Contacts.git
cd Contacts

Crea un entorno virtual 
python -m venv venv
source venv/bin/activate  # En Windows usa: venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver




