# Answer Me OpenAI

## Overview
A lightweight JavaScript application that interfaces with OpenAI's API to provide intelligent text analysis and professional response generation. This project demonstrates API integration and serverless function development.

## Features
- **Text Analysis**: Explains complex text in plain English
- **Professional Response Generation**: Drafts appropriate responses to given content
- **OpenAI Integration**: Uses GPT-4 for high-quality AI responses
- **Error Handling**: Robust error management for API calls
- **Serverless Ready**: Designed for deployment on edge computing platforms

## Technologies Used
- **JavaScript (ES6+)** - Core application logic
- **OpenAI API** - GPT-4 integration
- **Fetch API** - HTTP requests
- **Serverless Functions** - Edge computing compatible

## Project Structure
```
answermeopenai/
├── openai.js           # Main application file
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Node.js environment or serverless platform (Cloudflare Workers, Vercel, etc.)
- OpenAI API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/oskarcode/answermeopenai.git
   cd answermeopenai
   ```

2. Set up your OpenAI API key:
   - Replace `'your_openai_api_key'` in `openai.js` with your actual API key
   - Or use environment variables for better security

### Configuration
Update the `OPENAI_API_KEY` variable in `openai.js`:
```javascript
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'your_actual_api_key_here';
```

## Usage

### API Endpoint
The application expects a POST request with JSON payload:
```json
{
  "text": "Your text to analyze here"
}
```

### Response Format
```json
{
  "explanation": "AI-generated explanation and response"
}
```

### Example Request
```bash
curl -X POST https://your-deployment-url.com/api \
  -H "Content-Type: application/json" \
  -d '{"text": "Please explain quantum computing"}'
```

## Deployment

### Cloudflare Workers
1. Install Wrangler CLI
2. Configure your worker
3. Deploy with environment variables

### Vercel
1. Connect your GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically

## Security Notes
- **Never commit API keys** to version control
- Use environment variables for sensitive data
- Implement rate limiting for production use
- Validate input data to prevent abuse

## API Limits
- Respects OpenAI API rate limits
- Uses GPT-4 model for high-quality responses
- Implements proper error handling for API failures

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open source and available under the [MIT License](LICENSE).

## Contact
- GitHub: [@oskarcode](https://github.com/oskarcode)
- Project Link: [https://github.com/oskarcode/answermeopenai](https://github.com/oskarcode/answermeopenai)

## Acknowledgments
- OpenAI for providing the GPT-4 API
- Serverless computing platforms for easy deployment

---
*AI-powered text analysis and response generation*