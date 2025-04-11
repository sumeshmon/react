import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes';

function App() {
  return (
    <>
        <Jokes
          setup = "ചിരിക്കാൻ കഴിവില്ലാത്ത മനുഷ്യൻ ആരാണ്?"
          punchline = "പല്ല് ഇല്ലാത്തവൻ!"
          logo={logo}
        />
        <Jokes
          setup = "പരീക്ഷയ്ക്ക് ഒന്ന് പോലും പാസ്സായില്ലെങ്കിൽ എന്ത് ചെയ്യും?"
          punchline = "ഫേയ്‌സ്ബുക്കിൽ പോസ്റ്റ് ഇടും — ചങ്ക് തകർത്ത പരീക്ഷയായിരുന്നു!"
        />
        <Jokes
          setup = "കമ്പ്യൂട്ടർക്ക് പിടിമുറുക്കം വന്നാൽ എന്തു ചെയ്യും?"
          punchline = "Ctrl + Alt + Prayer!"
        />
        <Jokes
          setup = "കൊച്ചി മെട്രോ വഴിതെറ്റിയാൽ എന്താകും?"
          punchline = "'പാത നഷ്ടപ്പെട്ടു' എന്ന് ന്യൂസ് ചാനലുകൾ ബ്രേക്കിംഗ് ന്യൂസ് തരിക്കും!"
        />
    </>
  );
}

export default App;
