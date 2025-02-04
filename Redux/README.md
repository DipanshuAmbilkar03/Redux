## 🔥 Core Concepts  
### 1️⃣ **Single Source of Truth**  
- The entire application state is stored in a **normalized, immutable state tree** within a single store.  

### 2️⃣ **State is Read-Only**  
- State mutations are prohibited—only **pure reducer functions** can compute the next state based on dispatched actions.  

### 3️⃣ **Reducers Must Be Pure Functions**  
- Reducers are **side-effect-free** functions that deterministically return a new state based on the previous state and an action payload.  

## 🔥 Architectural Flow  

### graph TD
  - UI -->|dispatch(action)| Store;
  - Store -->|state update| Reducer;
  - Reducer -->|new state| Store;
  - Store -->|subscribe()| UI;

---

## 🚀 Installation  
```sh
npm install redux

