module.exports = (config, kernel) => {
  const x = {
    "win32": {
      "nvidia": `uv pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 ${config.xformers ? 'xformers' : ''} --index-url https://download.pytorch.org/whl/cu124`,
      "amd": "uv pip install torch-directml torchvision torchaudio numpy==1.26.4",
      "cpu": "uv pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0"
    },
    "darwin": "uv pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0",
    "linux": {
      "nvidia": `uv pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 ${config.xformers ? 'xformers' : ''}`,
      "amd": "uv pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 --index-url https://download.pytorch.org/whl/rocm6.2",
      "cpu": "uv pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 --index-url https://download.pytorch.org/whl/cpu"
    }
  }
  if (config.torch) {
    if (kernel.platform === "darwin") {
      return x[kernel.platform]
    } else {
      return x[kernel.platform][kernel.gpu]
    }
  }
}
