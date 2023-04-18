import os
import subprocess
import time

while True:
    subprocess.run(['git', 'pull'])
    os.system('find /tmp -type f -iname "gunicorn*" -delete')
    time.sleep(60)