
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const slike = {
  domov:
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1000',
  jezero:
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000',
  gozd:
    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000',
  gore:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000',
};

export default function App() {
  const [stran, setStran] = useState('Domov');

  return (
    <View style={s.container}>
      <StatusBar barStyle="dark-content" />

      <View style={s.header}>
        <Text style={s.logo}>🌿 WILD CAMP</Text>
        <Text style={s.headerText}>Tvoj svet narave</Text>
      </View>

      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
      >
        {stran === 'Domov' && (
          <>
            <Text style={s.nadnaslov}>POBEG V NARAVO</Text>
            <Text style={s.title}>Odkrij čar kampiranja</Text>

            <Image
              source={{ uri: slike.domov }}
              style={s.hero}
            />

            <Text style={s.subtitle}>
              Najlepše zgodbe se začnejo na prostem. ⛺
            </Text>

            <Text style={s.text}>
              Dobrodošel v svetu kampiranja in narave!
              Tukaj lahko spoznaš čudovite kraje, uživaš
              v svežem zraku in odkriješ, kako zabavno
              je preživljati čas na prostem.
            </Text>

            <Text style={s.sectionTitle}>Kaj te čaka?</Text>

            <View style={s.infoCard}>
              <Text style={s.cardEmoji}>⛺</Text>
              <View style={s.cardText}>
                <Text style={s.cardTitle}>Kampiranje</Text>
                <Text style={s.textSmall}>
                  Šotori, taborni ogenj in noči pod zvezdami.
                </Text>
              </View>
            </View>

            <View style={s.infoCard}>
              <Text style={s.cardEmoji}>🏞️</Text>
              <View style={s.cardText}>
                <Text style={s.cardTitle}>Raziskovanje narave</Text>
                <Text style={s.textSmall}>
                  Gozdovi, gore, jezera in svež zrak.
                </Text>
              </View>
            </View>

            <View style={s.infoCard}>
              <Text style={s.cardEmoji}>🎒</Text>
              <View style={s.cardText}>
                <Text style={s.cardTitle}>Priprava na izlet</Text>
                <Text style={s.textSmall}>
                  Preveri, kaj potrebuješ za kampiranje.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={s.button}
              onPress={() => setStran('Kampiranje')}
            >
              <Text style={s.buttonText}>Razišči več →</Text>
            </TouchableOpacity>
          </>
        )}

        {stran === 'Kampiranje' && (
          <>
            <Text style={s.nadnaslov}>NASVETI IN IDEJE</Text>
            <Text style={s.title}>Kampiranje in narava</Text>

            <Text style={s.text}>
              Kampiranje je odličen način, da se odklopiš
              od vsakdanjega življenja. S prijatelji ali
              družino lahko postaviš šotor, raziskuješ
              okolico in uživaš v miru narave.
            </Text>

            <Image source={{ uri: slike.jezero }} style={s.photo} />
            <Text style={s.subtitle}>🏕️ Izberi pravi prostor</Text>
            <Text style={s.text}>
              Šotor postavi na dovoljenem kampirnem mestu,
              na ravni podlagi in stran od nevarnih območij.
              Pred odhodom preveri vreme in lokalna pravila.
            </Text>

            <Image source={{ uri: slike.gozd }} style={s.photo} />
            <Text style={s.subtitle}>🎒 Kaj vzeti s seboj?</Text>
            <View style={s.checklist}>
              {[
                'Šotor in spalna vreča',
                'Podloga za spanje',
                'Svetilka in rezervne baterije',
                'Voda in hrana',
                'Primerna oblačila in obutev',
                'Komplet prve pomoči',
                'Vrečke za odpadke',
              ].map((item, index) => (
                <Text key={index} style={s.listItem}>
                  ✓  {item}
                </Text>
              ))}
            </View>

            <Image source={{ uri: slike.gore }} style={s.photo} />
            <Text style={s.subtitle}>🌲 Varujmo naravo</Text>
            <Text style={s.text}>
              Odpadke vedno pospravi za seboj, ne vznemirjaj
              živali in ne poškoduj rastlin. Ogenj zakuri
              samo tam, kjer je to dovoljeno in varno.
              Naravo pustimo takšno, kot smo jo našli.
            </Text>
          </>
        )}

        {stran === 'O meni' && (
          <>
            <Text style={s.nadnaslov}>AVTOR APLIKACIJE</Text>
            <Text style={s.title}>Nekaj o meni</Text>

            <View style={s.avatar}>
              <Text style={s.avatarEmoji}>🌲</Text>
            </View>

            <Text style={s.name}>Neo Jovicic</Text>
            <Text style={s.role}>Avtor aplikacije Wild Camp</Text>

            <Text style={s.sectionTitle}>Živjo! 👋</Text>
            <Text style={s.text}>
              Ime mi je Neo Jovičić. Prihajam iz Velenja in
              obiskujem 3. letnik računalniške šole. 
              
            
            </Text>

            <Text style={s.sectionTitle}>Zakaj ta aplikacija?</Text>
            <Text style={s.text}>
              Ustvaril sem to Aplikacijo zato ker sem
              Želel predstaviti lepote narave ter
              pokazati, kaj vse potrebujemo za kampiranje.
              Aplikacijo sem pripravil v okolju Expo
              z uporabo React Native.
            </Text>

            <Text style={s.sectionTitle}>Moj cilj 🌍</Text>
            <Text style={s.text}>
              Spodbuditi ljudi, da več časa preživijo
              na prostem, odkrivajo nove kraje in
              spoštujejo naravo.
            </Text>
          </>
        )}
      </ScrollView>

      <View style={s.nav}>
        {[
          { ime: 'Domov', ikona: '⌂' },
          { ime: 'Kampiranje', ikona: '⛺' },
          { ime: 'O meni', ikona: '☺' },
        ].map((item) => (
          <TouchableOpacity
            key={item.ime}
            style={[
              s.navItem,
              stran === item.ime && s.navActive,
            ]}
            onPress={() => setStran(item.ime)}
          >
            <Text
              style={[
                s.navIcon,
                stran === item.ime && s.navSelected,
              ]}
            >
              {item.ikona}
            </Text>
            <Text
              style={[
                s.navLabel,
                stran === item.ime && s.navSelected,
              ]}
            >
              {item.ime}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6EF',
  },
  header: {
    paddingTop: 52,
    paddingHorizontal: 22,
    paddingBottom: 17,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E9DF',
  },
  logo: {
    color: '#285C3B',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  headerText: {
    color: '#788477',
    fontSize: 13,
    marginTop: 4,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  nadnaslov: {
    color: '#68835C',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: '#203D2B',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 18,
  },
  hero: {
    width: '100%',
    height: 235,
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: '#DCE5D7',
  },
  photo: {
    width: '100%',
    height: 205,
    borderRadius: 17,
    marginTop: 12,
    marginBottom: 10,
    backgroundColor: '#DCE5D7',
  },
  subtitle: {
    color: '#315E3D',
    fontSize: 19,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#203D2B',
    fontSize: 21,
    fontWeight: '800',
    marginTop: 22,
    marginBottom: 10,
  },
  text: {
    color: '#505B50',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 11,
  },
  cardEmoji: {
    fontSize: 31,
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    color: '#294A32',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  textSmall: {
    color: '#687268',
    fontSize: 13,
    lineHeight: 19,
  },
  button: {
    backgroundColor: '#326746',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  checklist: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
  },
  listItem: {
    color: '#435344',
    fontSize: 15,
    lineHeight: 30,
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 58,
    backgroundColor: '#DCE9D7',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 15,
  },
  avatarEmoji: {
    fontSize: 58,
  },
  name: {
    color: '#23452E',
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center',
  },
  role: {
    color: '#788477',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
  },
  nav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E4E8DF',
    paddingTop: 9,
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 12,
  },
  navActive: {
    backgroundColor: '#EAF1E6',
  },
  navIcon: {
    fontSize: 22,
    color: '#788477',
    marginBottom: 3,
  },
  navLabel: {
    color: '#788477',
    fontSize: 12,
    fontWeight: '600',
  },
  navSelected: {
    color: '#285C3B',
    fontWeight: '900',
  },
});
