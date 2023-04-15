import os
import subprocess
import time

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler


class GitPullHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith('.git/index.lock'):
            # Ignore git lock files
            return
        print(f"Change detected in {event.src_path}, pulling changes")
        subprocess.call(['git', 'pull'])


if __name__ == '__main__':
    event_handler = GitPullHandler()
    observer = Observer()
    observer.schedule(event_handler, '.', recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()

    observer.join()