# A6: Let’s Talk with Yourself

## Project Overview
This project is a web-based chatbot that utilizes **Retrieval-Augmented Generation (RAG)** within the **LangChain** framework to answer questions about a specific individual (Pete). The chatbot retrieves relevant information from personal documents, academic records, and professional details to generate structured and contextually accurate responses.

## Features
- **Interactive Chat Interface** – Users can engage with the chatbot via a web-based UI.
- **AI-Generated Responses** – The chatbot generates coherent answers using advanced language models.
- **Reference Document Retrieval** – Supports responses with relevant sources from personal and academic documents.
- **Real-Time Processing** – Dynamically retrieves and generates responses based on user queries.

---

## Task 1: Source Discovery

### 1.1 Find All Relevant Sources Related to Yourself (1 Point)
To build an AI chatbot that answers questions about myself, I gathered the following sources of information:

### List of Reference Documents

1. **Personal Profile Document (Self-Created) – [Primary Source]**
   - Contains:
     - Full Name, Age, Education, and Work Experience
     - Research Interests (NLP, AI, Data Science)
     - Industry Expertise (Energy, Natural Gas Power Generation)
     - Hobbies & Interests
   - Purpose:
     - Serves as the main knowledge source for chatbot responses.

2. **University & Academic Information**
   - **Asian Institute of Technology (AIT) Website**
     - Confirms my enrollment in a Master’s Degree in Data Science & AI.
   - **Chiang Mai University Website**
     - Verifies my Bachelor's Degree in Electrical Engineering (2021).
   - **Coursework & Research Papers**
     - Includes topics on Machine Learning, NLP, AI applications.

3. **Professional & Industry Information**
   - **Company Documentation (if available)**
     - Details my 2 years of work experience as an Electrical Engineer in a Natural Gas Power Plant (Rayong, Thailand).
   - **Industry Reports & Case Studies**
     - Provides background on Power Generation, AI in Energy.

4. **AI & NLP Research Sources**
   - Machine Learning & NLP Books, Online Courses
   - GitHub Projects (if applicable)
   - Research Papers on AI & NLP

5. **Personal & Social Media Profiles (Optional)**
   - **LinkedIn Profile** – Professional background, work experience.
   - **Personal Blog or Website (if applicable)** – Technical write-ups, AI projects.

### Why These Sources?
- Ensures factual accuracy – Data comes from official and personal sources.
- Covers all relevant aspects – Academic, professional, and research-related details.
- Enhances chatbot performance – Provides structured knowledge for AI-generated answers.

---

### 1.2 Design a Prompt for the Chatbot (0.5 Point)
To ensure that the chatbot provides informative and structured responses about myself, I designed the following prompt template:

#### Chatbot Prompt Template
```
Hello! I am PeteBot, your AI assistant, here to answer questions about Pete in a polite, informative, and structured manner. My goal is to provide accurate responses about Pete’s background, education, work experience, and research interests while maintaining privacy and professionalism. Just let me know what you're wondering about, and I'll do my best to guide you through it!

{context} Question: {question} Answer:

```
### Why This Prompt?
- Ensures that responses remain polite, informative, and structured.
- Keeps the chatbot focused on Pete’s personal, academic, and professional details.
- Provides clear context for better retrieval-augmented generation (RAG) responses.

---

### 1.3 Explore Other Text-Generation Models (0.5 Point)
Different text-generation models can enhance AI capabilities by improving the accuracy and reliability of responses. Here are three models I tested:

1. **FastChat-T5-3B (Base Model)**
   - **Performance:** Provided incorrect and unrelated responses.
   - **Example:** When asked, "What is Transformers?", it only gave an electrical engineering definition and ignored the NLP aspect.

2. **DeepHermes-3B (LLaMA 3 Preview)**
   - **Performance:** Performed better than FastChat-T5-3B but still lacked contextual accuracy.
   - **Example:** Gave a partial answer about Transformers, mentioning NLP but missing key details.

3. **OpenAI GPT-4 (ChatGPT) – [Best Performance]**
   - **Performance:** Provided the most detailed and contextually accurate responses.
   - **Example:** Answered "What is Transformers?" with multiple interpretations (NLP, Electrical, and Pop Culture references).

---

## Task 2: Analysis and Problem Solving

### 2.1 List of Retriever and Generator Models Used (0.25 Point)
This project applies **Retrieval-Augmented Generation (RAG)**, which includes:
- **Retriever Model:** FAISS (Facebook AI Similarity Search) for document retrieval.
- **Generator Models:**
  1. FastChat-T5-3B
  2. DeepHermes-3B (LLaMA 3 Preview)
  3. GPT-4 (OpenAI) (Used for comparison)

---

### 2.2 Analysis of Issues Related to Models Providing Unrelated Information (0.25 Point)

#### A. Issues with the Retriever (FAISS)
- **Problem:** The retriever may fetch documents that are not closely related to the question.
- **Example:** If a user asks, "What is Transformers?", FAISS might return general information about Pete's background rather than relevant AI-related documents.
- **Reason:** FAISS retrieves documents based on similarity scores, which may not always match the query’s intent.
- **Possible Solution:**
  - Improve the retriever by using BM25, hybrid retrieval (combining dense and sparse retrieval), or fine-tuning embeddings for better semantic understanding.

#### B. Issues with the Generator Models

| Model           | Issue                          | Example & Analysis |
|----------------|--------------------------------|----------------|
| **FastChat-T5-3B** | Generates incorrect answers | Stated that transformers convert AC to DC, which is incorrect for AI-related queries. |
| **DeepHermes-3B** | Focuses too narrowly on AI   | Answered only in the context of NLP, missing other meanings like electrical transformers. |
| **GPT-4**       | May generate unnecessary details | Provided multiple definitions (AI, electrical, entertainment), which is comprehensive but sometimes too detailed. |

### Possible Solutions:
- Improve context awareness with better prompt engineering.
- Enhance retrieval filtering to ensure only the most relevant documents are passed to the generator.
- Use a more advanced generator model (e.g., GPT-4-Turbo) for better contextual reasoning.

---

## Task 3: Chatbot Development - Web Application

### Project Overview
This project is a web-based chatbot designed to answer questions about Pete using **Retrieval-Augmented Generation (RAG)**. It retrieves information from personal documents and generates responses using an AI model.

### Tech Stack
- **Backend:** Python, LangChain, FAISS
- **Frontend:** Streamlit (or Flask/FastAPI for API)
- **Models:** GPT-4, DeepHermes-3B, FastChat-T5-3B
- **Deployment:** Local or cloud-based hosting

---
![1](https://github.com/user-attachments/assets/2e9d4fd7-8c59-4c7c-b608-6a9b81b22f8f)
![2](https://github.com/user-attachments/assets/e1e030b7-88f5-4306-9277-f82438659bd4)
![3](https://github.com/user-attachments/assets/2f98e849-bb2c-4376-8d5e-6d50efb142bb)
![4](https://github.com/user-attachments/assets/c5385a9b-9d7d-4ae8-a06c-8997c8d854a7)
![5](https://github.com/user-attachments/assets/d9ffd7ed-8f12-4249-9309-d3b6ab527109)

## How to Run the Chatbot

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
pip install -r requirements.txt
python app.py
```
