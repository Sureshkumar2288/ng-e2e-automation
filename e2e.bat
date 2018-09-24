start cmd.exe /k "npm start"

TIMEOUT /T 70
start cmd.exe /k "gulp e2e-ci-test"

cd selenium-server
node-run.bat
