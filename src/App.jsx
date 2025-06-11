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
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">        {/* Welcome Section */}
        <Card className="text-center animate-fade-in bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-gray-700">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to PLP Task Manager
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This is a comprehensive React application demonstrating the 4 core parts of the PLP assignment:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-100 dark:border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Component Architecture</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-green-100 dark:border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">State Management</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-purple-100 dark:border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">API Integration</span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-orange-100 dark:border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">Responsive Design with Tailwind CSS</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-lg">
                <p className="text-white font-medium text-lg">
                  Created by <span className="font-bold">Sydwell Lebeloane</span>
                </p>
              </div>
            </div>            
            {/* Interactive Counter Demo */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Interactive State Demo
              </h3>
              <div className="flex items-center justify-center gap-6">
                <Button
                  onClick={() => setCount((count) => count - 1)}
                  variant="danger"
                  size="lg"
                  aria-label="Decrease counter"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  −
                </Button>
                
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200">
                  <span className="text-3xl font-bold text-white drop-shadow-lg">
                    {count}
                  </span>
                </div>
                
                <Button
                  onClick={() => setCount((count) => count + 1)}
                  variant="success"
                  size="lg"
                  aria-label="Increase counter"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  +
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
                Interactive counter demonstrating React state management
              </p>
            </div>
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
