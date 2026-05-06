# Contact Information Update Guide

## 📞 Replace These Placeholder Values

Before deploying the website, you MUST update the following placeholder contact information with your actual details.

---

## 1. Phone Number

**Current Placeholder:** `+910000000000`

**Replace in these files:**

### File: `src/components/site/CTA.tsx`
- Line ~20: `href="tel:+910000000000"`

### File: `src/components/site/Footer.tsx`
- Line ~25: `href="tel:+910000000000"`
- Line ~28: Display text `+91 00000 00000`

### File: `src/components/site/StickyMobileCTA.tsx`
- Line ~23: `href="tel:+910000000000"`

---

## 2. Email Address

**Current Placeholder:** `sales@impex.example`

**Replace in these files:**

### File: `src/components/site/CTA.tsx`
- Line ~27: `href="mailto:sales@impex.example"`

### File: `src/components/site/Footer.tsx`
- Line ~33: `href="mailto:sales@impex.example"`
- Line ~36: Display text `sales@impex.example`

---

## 3. WhatsApp Number

**Current Placeholder:** `910000000000` (without the + sign)

**Replace in these files:**

### File: `src/components/site/EnquiryForm.tsx`
- Line ~61: `const whatsappNumber = "910000000000";`

### File: `src/components/site/StickyMobileCTA.tsx`
- Line ~35: `href="https://wa.me/910000000000"`

**Important:** WhatsApp number should be in international format WITHOUT the + sign.
Example: For +91 98765 43210, use `919876543210`

---

## 4. Email Subject Line (Optional)

### File: `src/components/site/EnquiryForm.tsx`
- Line ~68: `const emailSubject = ...`
- You can customize the email subject format if needed

---

## Quick Find & Replace

You can use your code editor's "Find & Replace" feature:

1. **Find:** `+910000000000` → **Replace with:** Your phone number (with +)
2. **Find:** `910000000000` → **Replace with:** Your WhatsApp number (without +)
3. **Find:** `sales@impex.example` → **Replace with:** Your email address

---

## After Updating

1. Save all files
2. Run `npm run dev` to test locally
3. Test all contact links:
   - Click phone numbers (should open phone dialer)
   - Click email links (should open email client)
   - Submit enquiry form (should open WhatsApp & Email)
   - Click sticky mobile CTA buttons
4. Run `npm run build` to create production build
5. Deploy the `dist` folder to your web host

---

## Example Values

If your contact details are:
- **Phone:** +91 98765 43210
- **Email:** contact@impexdisplays.com
- **WhatsApp:** +91 98765 43210

Then replace:
- `+910000000000` → `+919876543210`
- `910000000000` → `919876543210`
- `sales@impex.example` → `contact@impexdisplays.com`
- `+91 00000 00000` → `+91 98765 43210`

---

## ✅ Verification Checklist

After updating, verify:
- [ ] Phone links work on mobile devices
- [ ] Email links open your email client
- [ ] WhatsApp opens with pre-filled message
- [ ] Footer displays correct contact info
- [ ] Sticky mobile CTA has correct links
- [ ] Form submission opens WhatsApp & Email correctly

---

**Need help?** Contact the development team during the 30-day support period.
