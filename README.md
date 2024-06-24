# Poems by Rumi


This project involves the development and deployment of a fine-tuned Mistral-7b model to generate poems in the style of Rumi. The model is deployed via a serverless Python API and a React application provides an intuitive user interface.

https://github.com/gunwant11/rumi/assets/72063762/9edcdcfd-e87a-4c5c-8839-7041f0a8cba0

## Features

- **Fine-tuned Mistral-7b Model**: The model was fine-tuned using data collected from the web with the Unstoth framework to generate poems in the style of Rumi.
- **Serverless Python API**: The API, deployed with Docker on RunPod, handles model inference requests.
- **React Application**: An intuitive UI built with React allows users to easily generate and view poems.

## Technologies Used

- **Python**: For developing the inference API.
- **Transformers**: The Mistral-7b model was used and fine-tuned.



- **React**: For creating the user interface.
- **Docker**: For containerizing the API.
- **RunPod**: For deploying the serverless API.
- **Unstoth Framework**: For collecting and processing the data used to fine-tune the model.
