<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Refraction Simulator</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            background-color: #f5f7fa;
            color: #333;
        }
        .container {
            max-width: 1000px;
            margin: auto;
            padding: 2rem;
        }
        h1, h2 {
            color: #2c3e50;
        }
        ul {
            list-style-type: disc;
            padding-left: 2rem;
        }
        .section {
            margin-bottom: 2rem;
            background: #ffffff;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        code {
            background: #eef1f5;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: monospace;
        }
        @media (max-width: 600px) {
            .container {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Refraction Simulator</h1>

        <div class="section">
            <p>This project is a simple web-based simulation of light refraction using HTML, CSS, and JavaScript. The user can input the angle of incidence and the refractive indices of two different media (e.g., air and water) to visualize how light behaves as it moves from one medium to another.</p>
        </div>

        <div class="section">
            <h2>Features</h2>
            <ul>
                <li><strong>Refraction Visualization</strong>: Displays a graphical representation of light rays at the boundary between two media.</li>
                <li><strong>Interactive Inputs</strong>: Users can modify the angle of incidence and refractive indices to observe effects on refraction.</li>
                <li><strong>Educational Content</strong>: Includes explanations about refraction, total internal reflection, and critical angle formulas.</li>
                <li><strong>Responsive Design</strong>: Optimized layout for desktops, tablets, and smartphones.</li>
            </ul>
        </div>

        <div class="section">
            <h2>Technologies Used</h2>
            <ul>
                <li><strong>HTML</strong>: Structures the simulation content and input forms.</li>
                <li><strong>CSS</strong>: Provides styling and ensures responsive design.</li>
                <li><strong>JavaScript</strong>: Manages user interactions, calculations (Snell's Law), and drawing on canvas.</li>
            </ul>
        </div>

        <div class="section">
            <h2>How to Use</h2>
            <ol>
                <li>Open the <code>index.html</code> file in your web browser.</li>
                <li>Enter the angle of incidence (in degrees).</li>
                <li>Input the refractive index for the first medium (e.g., air, ~<code>1.0</code>).</li>
                <li>Input the refractive index for the second medium (e.g., water, ~<code>1.33</code>).</li>
                <li>Click the <strong>"Show Diagram"</strong> button to visualize the refraction.</li>
                <li>Experiment with different values to observe light behavior!</li>
            </ol>
        </div>

        <div class="section">
            <h2>Example Input</h2>
            <ul>
                <li>Angle of Incidence: <code>30°</code></li>
                <li>Refractive Index <em>n₁</em> (Air): <code>1.0</code></li>
                <li>Refractive Index <em>n₂</em> (Water): <code>1.33</code></li>
            </ul>
        </div>

        <div class="section">
            <h2>Additional Information</h2>
            <p>The simulator demonstrates the fundamentals of refraction and total internal reflection in optics, making it a valuable educational tool for students and enthusiasts alike.</p>
            <p>Feel free to explore, modify, and extend the project to enhance features or improve the visualizations!</p>
        </div>
    </div>
</body>
</html>
