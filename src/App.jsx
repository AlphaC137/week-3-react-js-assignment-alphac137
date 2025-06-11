import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Section */}
        <Card className="text-center animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome to PLP Task Manager
            </h1>
            <p className="text-lg text-black dark:text-gray-400 max-w-2xl mx-auto">
              This is a React application showing 4 parts of the PLP assignment which are: 
              <ol>
                <li>- Component architecture</li>
                <li>- State management</li>
                <li>- API integration</li>
                <li>- Responsive design with Tailwind CSS</li> 
              </ol>
              By yours truly Sydwell Lebeloane.
            </p>
            
            {/* Interactive Counter Demo */}
            <div className="flex items-center justify-center gap-4 py-4">
              <Button
                onClick={() => setCount((count) => count - 1)}
                variant="danger"
                size="sm"
                aria-label="Decrease counter"
              >
                -
              </Button>
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-2 rounded-lg">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {count}
                </span>
              </div>
              <Button
                onClick={() => setCount((count) => count + 1)}
                variant="success"
                size="sm"
                aria-label="Increase counter"
              >
                +
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive counter demonstrating React state management
            </p>
          </div>
        </Card>

        {/* Task Manager Section */}
        <section id="tasks" className="animate-slide-in">
          <TaskManager />
        </section>

        {/* API Data Section */}
        <section id="api-data" className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <ApiData />
        </section>

        {/* About Section */}
        <section id="about" className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <Card title="About This Project">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                This application showcases modern React.js development practices including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                     Component Architecture
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Reusable Button, Card, and Layout components</li>
                    <li>• Proper PropTypes validation</li>
                    <li>• Component composition patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                     State Management
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• useState and useEffect hooks</li>
                    <li>• useContext for theme management</li>
                    <li>• Custom useLocalStorage hook</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                     API Integration
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Fetch data from JSONPlaceholder API</li>
                    <li>• Loading and error state handling</li>
                    <li>• Search and pagination features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                     Modern Styling
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Tailwind CSS utility classes</li>
                    <li>• Dark/light theme support</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Smooth animations and transitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
}

export default App; 