# Refraction Simulator

An interactive web application that visualizes the principles of light refraction using HTML, CSS, and JavaScript.

![Refraction Simulator]() 
*(Replace with actual screenshot)*

## Features

- **Interactive Refraction Visualization**: Demonstrates how light bends when passing between two media
- **Customizable Parameters**:
  - Adjustable angle of incidence
  - Configurable refractive indices for both media
- **Educational Content**:
  - Explanation of refraction principles
  - Table of common material refractive indices
  - Total internal reflection explanation
- **Responsive Design**: Works on various screen sizes

## How to Use

1. Enter the angle of incidence (in degrees)
2. Set the refractive indices for both media (n₁ and n₂)
3. Click "Show Diagram" to visualize the refraction
4. Observe the incident and refracted rays on the canvas

## Physics Principles

The simulator implements **Snell's Law**:
n₁ sin(θ₁) = n₂ sin(θ₂)

Where:
- n₁, n₂ = refractive indices of the two media
- θ₁ = angle of incidence
- θ₂ = angle of refraction

For total internal reflection, the critical angle is calculated as:
θ_c = sin⁻¹(n₂/n₁) [when n₁ > n₂]

## Sample Material Refractive Indices

| Material  | Refractive Index |
|-----------|------------------|
| Air       | 1.00             |
| Water     | 1.33             |
| Glass     | 1.52             |
| Diamond   | 2.42             |
| Oil       | 1.47             |

## Technical Implementation

- **Frontend**:
  - HTML5 Canvas for diagram rendering
  - Vanilla JavaScript for calculations and interactivity
  - CSS Flexbox for responsive layout
- **Key Functions**:
  - `drawRefraction()` - Main rendering function
  - `drawRay()` - Helper function for drawing light rays
  - Input validation for user parameters

## Future Enhancements

- [ ] Dynamic angle adjustment with slider control
- [ ] Visual indication of total internal reflection
- [ ] Additional optical phenomena (dispersion, diffraction)
- [ ] Expanded material database
- [ ] Mobile-friendly touch controls


