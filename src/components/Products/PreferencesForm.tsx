import React, { useState } from 'react';
import { updatePreference } from '../../api/user';

interface PreferencesFormProps {
  token: string;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ token }) => {
  const [preferences, setPreferences] = useState({
    dietaryRestrictions: '',
    cuisine: '',
    cookingTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPreferences(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updatePreference(JSON.stringify(preferences), token);
      alert('Preferences updated successfully');
    } catch (error) {
      console.error('Error updating preferences:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dietary Restrictions:</label>
        <input
          type="text"
          name="dietaryRestrictions"
          value={preferences.dietaryRestrictions}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          value={preferences.cuisine}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Cooking Time (min):</label>
        <input
          type="number"
          name="cookingTime"
          value={preferences.cookingTime}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Preferences</button>
    </form>
  );
};

export default PreferencesForm;