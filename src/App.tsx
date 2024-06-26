import { Challenge, Footer, Header } from "@components";
import { AuthProvider, ChallengeProvider, ModalProvider } from "@providers";

const App = () => {
  return (
    <AuthProvider>
      <ChallengeProvider>
        <ModalProvider>
          <Header />
          <Challenge />
          <Footer />
        </ModalProvider>
      </ChallengeProvider>
    </AuthProvider>
  );
};

export default App;
