#!/bin/bash

set -o errexit

export PYTHONPATH=$PYTHONPATH:/path/to/BackEnd


echo "Installing dependencies..."
pip install -r requirements.txt

echo "Collecting static files..."
python manage.py collectstatic --no-input

echo "Applying migrations..."
python manage.py migrate

echo "Build and deployment script completed successfully."
