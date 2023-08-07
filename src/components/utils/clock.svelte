<!-- a smpile time clock -->
<script>
import { onDestroy } from 'svelte';

$: time = getTimeString();

function getTimeString() {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Update the time every second using setInterval
const interval = setInterval(() => {
  time = getTimeString();
}, 1000);

// Cleanup the interval when the component is destroyed
onDestroy(() => {
  clearInterval(interval);
});
</script>
<p class='text-2xl fixed top-4 right-4 z-10  text-yellow-300 font-bold font-tp'>
    {time}
</p>