import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.title - Card title
 * @param {boolean} props.shadow - Whether to show shadow
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {function} props.onClick - Click handler
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  children, 
  className = '', 
  title, 
  shadow = true, 
  hover = false,
  onClick,
  ...rest 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300';
  const shadowClasses = shadow ? 'shadow-md' : '';
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  const cardClasses = `${baseClasses} ${shadowClasses} ${hoverClasses} ${clickableClasses} ${className}`.trim();

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      {...rest}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </div>
      )}
      <div className={title ? "p-6" : "p-6"}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  shadow: PropTypes.bool,
  hover: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;
