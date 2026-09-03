// Wait until the page has fully loaded before looking for elements
document.addEventListener('DOMContentLoaded', function () {

  const screen = document.getElementById('envelope-screen');
  const envelope = document.getElementById('envelope');

  envelope.addEventListener('click', function () {
    if (envelope.classList.contains('open')) {
      return; // already opened, ignore extra clicks
    }

    // Flap opens and the card peeks out at the same time
    envelope.classList.add('open');
    screen.classList.add('stage-1');

    // Scrolling is locked until this point (see style.css) — unlock it
    // now that the envelope has been opened
    document.body.classList.add('unlocked');

    // After a short pause (so guests can see "Save the Date" peeking out),
    // the card lifts the rest of the way out, the photo fades in, and the
    // polaroids appear — all automatically, no second click needed.
    setTimeout(function () {
      screen.classList.add('stage-2');
    }, 1300);
  });

  // --- RSVP / mailing address form ---
  // Sends the submission to Web3Forms (a free form-to-email service),
  // which emails it straight to you. The page never reloads — we just
  // show a thank-you message in place.
  const addressForm = document.getElementById('address-form-element');
  const submitButton = addressForm.querySelector('button[type="submit"]');
  const placeholderNote = document.getElementById('form-placeholder-note');

  addressForm.addEventListener('submit', function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(addressForm)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          placeholderNote.textContent = 'Thank you! We’ve received your address.';
          addressForm.reset();
        } else {
          placeholderNote.textContent = 'Something went wrong — please try again, or reach out to us directly.';
        }
        placeholderNote.classList.add('visible');
      })
      .catch(function () {
        placeholderNote.textContent = 'Something went wrong — please check your internet connection and try again.';
        placeholderNote.classList.add('visible');
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit My Address';
      });
  });

  // --- "Back to Envelope" footer link ---
  // Scrolls back to the top, then resets the envelope so a guest can
  // watch the whole open-up sequence again from the start.
  const backToEnvelopeLink = document.getElementById('back-to-envelope');

  backToEnvelopeLink.addEventListener('click', function (event) {
    event.preventDefault();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Wait for the scroll-to-top to finish before resetting, so the
    // envelope doesn't visibly snap shut while still on screen
    setTimeout(function () {
      envelope.classList.remove('open');
      screen.classList.remove('stage-1', 'stage-2');
      document.body.classList.remove('unlocked');
    }, 800);
  });

});
