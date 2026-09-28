'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface CollegeFilterDropdownProps {
  label: string;
  icon: React.ReactNode;
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}

export function CollegeFilterDropdown({
  icon,
  options,
  selectedValue,
  onChange,
  ariaLabel
}: CollegeFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.id === selectedValue) || options[0];
  const isFiltered = selectedValue !== 'all';

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleSelect = (optionId: string) => {
    onChange(optionId);
    setIsOpen(false);
  };

  return (
    <div className="custom-filter-dropdown" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`custom-filter-trigger ${isFiltered ? 'active' : ''} ${isOpen ? 'open' : ''}`}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
      >
        <span className="custom-filter-trigger-icon">{icon}</span>
        <span className="custom-filter-trigger-label">
          {selectedOption ? selectedOption.label : 'Select'}
        </span>
        <span className="custom-filter-trigger-count">
          {selectedOption ? selectedOption.count : 0}
        </span>
        <span className="custom-filter-trigger-chevron">
          <ChevronDown size={14} />
        </span>
      </button>

      {/* Dropdown Menu Popover */}
      {isOpen && (
        <div className="custom-filter-menu" role="listbox">
          <div className="custom-filter-menu-list">
            {options.map((option, index) => {
              const isSelected = option.id === selectedValue;
              const isFirstAll = index === 0;

              return (
                <React.Fragment key={option.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.id)}
                    className={`custom-filter-option ${isSelected ? 'selected' : ''}`}
                  >
                    <span className="custom-filter-option-label">{option.label}</span>
                    <div className="custom-filter-option-meta">
                      <span className="custom-filter-option-count">({option.count})</span>
                      {isSelected && (
                        <Check size={14} color="#FA6400" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>
                  {isFirstAll && <div className="custom-filter-divider" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
