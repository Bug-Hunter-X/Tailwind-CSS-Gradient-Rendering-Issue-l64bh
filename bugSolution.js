```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- Content here -->
</div>

/* Solution: Add fallback styles */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, #3B82F6, #A855F7); /* fallback for older browsers */
}
```