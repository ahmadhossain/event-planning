import React from "react";

const CreateEvent = () => {
  return (
    <div>
      <h1>Create Event</h1>
      <form>
        <label for="event_name">Event Name:</label>
        <input type="text" name="event_name" id="event_name" required />
        <br></br>

        <label for="event_date">Event Date:</label>
        <input type="date" name="event_date" id="event_date" required />
        <br></br>

        <label for="event_time">Event Time:</label>
        <input type="time" name="event_time" id="event_time" required />
        <br></br>

        <label for="food_option">Food:</label>
        <select name="food_option" id="food_option" required>
          <option value="">Select an option</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non_vegetarian">Non-Vegetarian</option>
        </select>
        <br></br>

        <label for="venue_option">Venue:</label>
        <select name="venue_option" id="venue_option" required>
          <option value="">Select an option</option>
          <option value="restaurant">Restaurant</option>
          <option value="banquet_hall">Banquet Hall</option>

          <option value="outdoor_garden">Outdoor Garden</option>
        </select>
        <br></br>

        <label for="decorations_option">Decorations:</label>
        <select name="decorations_option" id="decorations_option" required>
          <option value="">Select an option</option>
          <option value="flowers">Flowers</option>
          <option value="balloons">Balloons</option>
          <option value="lights">Lights</option>
          <option value="drapes">Drapes</option>
        </select>
        <br></br>

        <label for="photography_option">Photography:</label>
        <select name="photography_option" id="photography_option" required>
          <option value="">Select an option</option>
          <option value="professional">Professional</option>
          <option value="amateur">Amateur</option>
          <option value="none">None</option>
        </select>
        <br></br>

        <input type="submit" value="Create Event" />
      </form>

      <button>Proceed</button>
    </div>
  );
};

export default CreateEvent;
