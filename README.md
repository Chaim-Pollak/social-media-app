# Social Media App  

A plain social media platform featuring communities, posts, comments, and likes. Users can authenticate using their GitHub accounts.  

## Features  
- User authentication with GitHub  
- Create communities  
- Post content and interact with others through comments and likes  
- Responsive UI for a seamless experience  

## Tech Stack  
- **Frontend:** React (Vite) with TypeScript  
- **Backend & Database:** Supabase  

## Installation  

Run the following commands to set up the project:  

```sh
# Clone the repository
git clone https://github.com/your-username/social-media-app.git
cd social-media-app

# Install dependencies
npm install

# Create a .env file and configure environment variables (replace with actual values)
echo "VITE_SUPABASE_URL=your_supabase_url" > .env
echo "VITE_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env

# Start the development server
npm run dev

# (Optional) Build for production
npm run build

# (Optional) Run the production build
npm run preview
