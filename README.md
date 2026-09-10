# BlackHole AI — Deploy aur phone pe install karne ka guide

## Ye app kaise kaam karta hai (zaroori samajhna)
- Ye ek PWA hai — asli Play Store APK nahi, lekin phone pe bilkul app jaisa install aur chalta hai
- Har user (tum ya jisko bhejo) apni khud ki free Anthropic API key daalega — isliye AI ka poora cost uski taraf se count hoga, tumhare upar nahi
- Deep Research feature (Reddit + DuckDuckGo se data) tumhare hosted backend se chalega — ye free hai, koi key nahi chahiye isme

## Step 1: Deploy karo (5 minute)
1. https://github.com pe is poore folder ko naye repository mein upload karo (naam: blackhole-ai)
2. https://vercel.com pe GitHub se sign up karo
3. "Add New Project" → apni repository select karo → "Deploy" dabao
4. 1-2 minute mein live link milega, jaise `blackhole-ai.vercel.app`

## Step 2: Apne phone pe install karo
1. Us link ko apne phone ke browser (Chrome/Safari) mein kholo
2. Android: browser ke menu (3 dots) mein "Add to Home screen" ya "Install app" dabao
3. iPhone: Share button dabao → "Add to Home Screen"
4. Ab BlackHole AI ka icon tumhare home screen pe app jaisa dikhega — usi pe tap karke full-screen khulega

## Step 3: Apni API key daalo
1. Pehli baar kholne pe app tumse API key maangega
2. https://console.anthropic.com pe jaake free account banao, API key generate karo
3. Wo key app mein paste karo — ye sirf tumhare phone mein save hoti hai, kahin bahar nahi jaati

## Step 4: Kisi ko bhejna ho
1. Bas apna live link (jaise `blackhole-ai.vercel.app`) unhe bhej do — WhatsApp, koi bhi jagah
2. Wo link kholenge, "Add to Home Screen" karenge, apni khud ki API key daalenge
3. Unka app bilkul tumhare jaisa dikhega aur chalega — apni-apni key se, apna-apna cost

## Important
- API key kisi ko share mat karna — wo tumhara personal billing account hai
- Deep Research thoda slow ho sakta hai (2 sources se data la raha hai, phir AI analyze kar raha hai) — ye normal hai
- Agar "Add to Home Screen" ka option nahi dikh raha, browser ko update karo ya Chrome/Safari use karo
