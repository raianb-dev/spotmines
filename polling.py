import os
import subprocess
import time

while True:
    subprocess.run(['git', 'pull'])
    os.system('find /tmp -type f -iname "gunicorn*" -delete')
    subprocess.run(['python3', 'manage.py', 'collectstatic', '--noinput'])
    time.sleep(60)
