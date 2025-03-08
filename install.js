module.exports = {
  "run": [{
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/peanutcocktail/devika app",
      ]
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "uv pip install -r requirements.txt",
        "playwright install --with-deps"
      ],
    }
  }, {
    method: "shell.run",
    params: {
      path: "app/ui",
      message: "npm install"
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
