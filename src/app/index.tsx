
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";

export default function App() {
  const [page, setPage] = useState("Domov");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>FITNES IN ŠPORT</Text>
          <Text style={styles.headerTitle}>{page}</Text>
        </View>
        <Text style={styles.headerMark}>NJ</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* DOMOV */}
        {page === "Domov" && (
          <>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000",
              }}
              style={styles.mainImage}
            />

            <View style={styles.card}>
              <Text style={styles.label}>DOBRODOŠLI</Text>

              <Text style={styles.title}>
                POZDRAVLJENI K MOJI MOBILNI APLIKACIJI!
              </Text>

              <Text style={styles.paragraph}>
                Dobrodošli v moji mobilni aplikaciji. Aplikacija
                je namenjena predstavitvi mojih hobijev,
                zanimanj in aktivnosti, ki jih rad počnem
                v prostem času.
              </Text>

              <Text style={styles.paragraph}>
                Glavni temi aplikacije sta fitnes in kuhanje.
                Predstavil bom, zakaj rad obiskujem fitnes,
                kako pomembni so pravilna izvedba vaj,
                ogrevanje, hidracija in počitek.
              </Text>

              <Text style={styles.paragraph}>
                Poleg fitnesa me zanima tudi kuhanje.
                Rad pripravljam različne jedi, predvsem
                pečenega lososa, gobovo juho in solate.
                Predstavil bom tudi nekaj osnovnih pravil
                za pripravo hrane in higieno v kuhinji.
              </Text>

              <Text style={styles.paragraph}>
                Če te zanima fitnes, lahko v aplikaciji
                najdeš nekaj začetnih nasvetov, ki ti
                pomagajo pri prvih korakih. Pomembno je,
                da začneš postopoma, se naučiš pravilne
                tehnike in si vzameš dovolj časa za počitek.
              </Text>

              <Text style={styles.paragraph}>
                Moj namen je pokazati, da lahko vsak najde
                aktivnost, v kateri uživa. Ni pomembno,
                da si takoj odličen, ampak da se učiš,
                napreduješ in pri tem uživaš.
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => setPage("Moji hobiji")}
              >
                <Text style={styles.buttonText}>
                  Oglej si moje hobije
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.smallCards}>
              <View style={styles.smallCard}>
                <Text style={styles.number}>01</Text>
                <Text style={styles.cardTitle}>Fitnes</Text>
                <Text style={styles.smallText}>
                  Vadba, gibanje in dobro počutje.
                </Text>
              </View>

              <View style={styles.smallCard}>
                <Text style={styles.number}>02</Text>
                <Text style={styles.cardTitle}>Kuhanje</Text>
                <Text style={styles.smallText}>
                  Priprava različnih domačih jedi.
                </Text>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>Center Gibanja</Text>

              <Text style={styles.paragraph}>
                Eden izmed fitnes centrov v Velenju je
                Center Gibanja, katerega jaz tudi obiskujem. Na njihovi spletni strani
                lahko izveš več o fitnesu, opremi in
                različnih programih vadbe. 
              </Text>

              <View style={styles.logoBox}>
                <Text style={styles.centerLogo}>CENTER</Text>
                <Text style={styles.centerLogoBlue}>GIBANJA</Text>
                <Text style={styles.centerSub}>
                  VELENJE
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  Linking.openURL("https://www.centergibanja.com/")
                }
              >
                <Text style={styles.buttonText}>
                  Obišči Center Gibanja
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* MOJI HOBIJI */}
        {page === "Moji hobiji" && (
          <>
            <Text style={styles.intro}>
              V prostem času se najraje ukvarjam s fitnesom
              in kuhanjem. To sta dejavnosti, ki me sproščata,
              zanimata in mi omogočata, da se naučim
              vedno nekaj novega.
            </Text>

            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000",
              }}
              style={styles.articleImage}
            />

            <View style={styles.card}>
              <Text style={styles.title}>
                Moje zanimanje za fitnes
              </Text>

              <Text style={styles.paragraph}>
                V prostem času zelo rad hodim v fitnes.
                Všeč mi je, ker lahko skrbim za zdravo telo,
                telesno pripravljenost in svoj physique.
                Vadba mi pomaga tudi pri sproščanju,
                saj se po treningu počutim boljše.
              </Text>

              <Text style={styles.paragraph}>
                Pri fitnesu mi je pomembno, da napredujem
                postopoma in da se naučim pravilno izvajati
                različne vaje. Ne gre samo za dvigovanje
                uteži, ampak tudi za disciplino, vztrajnost
                in skrb za svoje zdravje.
              </Text>
            </View>

            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1000",
              }}
              style={styles.articleImage}
            />

            <View style={styles.card}>
              <Text style={styles.title}>
                Pravilna izvedba vaj
              </Text>

              <Text style={styles.paragraph}>
                Pri vadbi je zelo pomembno, da se naučimo
                pravilne izvedbe vaj. Če vajo izvajamo
                nepravilno ali uporabljamo preveliko
                obremenitev, lahko pride do poškodbe.
                Zato je dobro, da začetniki prosijo
                trenerja za pomoč in nasvet.
              </Text>

              <Text style={styles.paragraph}>
                Pomembno je tudi, da se pred treningom
                dobro ogrejemo. Ogrevanje pripravi telo
                na gibanje in pomaga zmanjšati možnost
                poškodb. Za začetek lahko uporabimo
                nekaj minut lahke hoje ali kolesarjenja
                ter preproste dinamične vaje.
              </Text>

              <Text style={styles.paragraph}>
                Med vadbo ne smemo pozabiti na hidracijo.
                Redno pitje vode pomaga ohranjati dobro
                počutje med treningom. Po zahtevnejših
                vajah si vzamemo dovolj časa za počitek.
              </Text>

              <Text style={styles.paragraph}>
                Pri težjih serijah lahko počivamo tudi
                3 do 5 minut, če to potrebujemo za dobro
                izvedbo naslednje serije. Počitek je
                odvisen od vrste vaje in intenzivnosti.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>
                Začetniški trening
              </Text>

              <Text style={styles.paragraph}>
                Za začetnike je dobra izbira preprost
                trening celega telesa, pri katerem se
                naučimo osnovnih gibov. Začnemo lahko
                z lažjimi obremenitvami in eno ali dvema
                serijama vaj. Število ponovitev prilagodimo
                svojim sposobnostim in pravilni tehniki.
              </Text>

              <Text style={styles.paragraph}>
                Pogosto omenjen program je tudi Push,
                Pull, Legs oziroma PPL. Push je namenjen
                potisnim mišičnim skupinam, Pull vlečnim,
                Legs pa mišicam nog. Takšna razdelitev
                je ena izmed možnosti treninga, vendar
                ni nujno najboljša izbira za vsakega
                začetnika.
              </Text>

              <Text style={styles.paragraph}>
                Najbolj pomembno je, da ne hitimo,
                poslušamo svoje telo in si med treningi
                zagotovimo dovolj počitka.
              </Text>
            </View>

            <Image
              source={require("../../assets/images/Solata.jpg")}
            
              
              style={styles.articleImage}
            />

            <View style={styles.card}>
              <Text style={styles.title}>
                Moje zanimanje za kuhanje
              </Text>

              <Text style={styles.paragraph}>
                Poleg fitnesa zelo rad tudi kuham.
                Všeč mi je pripravljanje različnih jedi
                in preizkušanje novih receptov. Najraje
                pečem lososa, pripravljam gobovo juho
                in različne vrste solat.
              </Text>

              <Text style={styles.paragraph}>
                Pri kuhanju rad uporabljam sveže sestavine
                in kombiniram različne okuse. Pomembno
                se mi zdi, da je hrana okusna, raznolika
                in lepo pripravljena.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>
                Prehrana in fitnes
              </Text>

              <Text style={styles.paragraph}>
                Če se ukvarjamo s fitnesom, je dobro
                poskrbeti za raznoliko in uravnoteženo
                prehrano. Pomembna so živila, kot so
                piščanec, ribe, jajca, stročnice,
                zelenjava, sadje in različna žita.
              </Text>

              <Text style={styles.paragraph}>
                Beljakovine so pomembne za obnovo mišic,
                ogljikovi hidrati pa nam zagotavljajo
                energijo za vsakodnevne aktivnosti
                in trening. Pomembne so tudi zdrave
                maščobe ter dovolj tekočine.
              </Text>

              <Text style={styles.paragraph}>
                Dobro je omejiti pogosto pitje sladkih
                pijač in uživanje velikih količin sladkarij.
                To pa ne pomeni, da si nikoli ne smemo
                privoščiti bonbonov, sladice ali svoje
                najljubše hrane. Pomembna je predvsem
                raznolikost in ravnovesje.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.title}>
                Higiena in organizacija v kuhinji
              </Text>

              <Text style={styles.paragraph}>
                Pred začetkom kuhanja si vedno pripravim
                vse potrebne sestavine in kuhinjske
                pripomočke. Tako imam vse na dosegu roke
                in lahko kuham bolj organizirano.
              </Text>

              <Text style={styles.paragraph}>
                Zelo pomembna je higiena. Pred pripravo
                hrane si temeljito umijem roke, očistim
                delovno površino in uporabim čisto posodo.
                Pri pripravi surovega mesa pazim tudi,
                da ne pride v stik z že pripravljeno hrano.
              </Text>

              <Text style={styles.paragraph}>
                Ko končam s kuhanjem, vedno pospravim
                kuhinjo za sabo. Pomijem posodo, očistim
                kuhinjski pult, pospravim sestavine
                in uredim pripomočke. Tako je kuhinja
                čista in pripravljena za naslednje kuhanje.
              </Text>
            </View>

            <View style={styles.note}>
              <Text style={styles.cardTitle}>
                Zaključek
              </Text>

              <Text style={styles.paragraph}>
                Fitnes in kuhanje sta moja najljubša
                hobija. Pri fitnesu skrbim za gibanje
                in dobro počutje, pri kuhanju pa lahko
                ustvarjam in preizkušam nove jedi.
                Menim, da je pomembno najti ravnovesje
                med aktivnostjo, prehrano in počitkom.
              </Text>
            </View>
          </>
        )}

        {/* O MENI */}
        {page === "O meni" && (
          <View style={styles.card}>
            <Image
              source={require("../../assets/images/Neo.jpg")}
              style={styles.profileImage}
            />

            <Text style={styles.label}>
              AVTOR APLIKACIJE
            </Text>

            <Text style={styles.title}>
              Neo Jovičić
            </Text>

            <Text style={styles.paragraph}>
              Ime mi je Neo Jovičić, star sem 17 let
              in obiskujem 3. letnik računalništva
              na Šolskem centru Velenje.
            </Text>

            <Text style={styles.paragraph}>
              V prostem času se rad ukvarjam s fitnesom
              in kuhanjem. Zanimajo me tudi računalništvo,
              tehnologija in ustvarjanje novih stvari.
            </Text>

            <View style={styles.separator} />

            <Text style={styles.label}>
              MOJI INTERESI
            </Text>

            <Text style={styles.interest}>
              Računalništvo
            </Text>

            <Text style={styles.interest}>
              Fitnes in šport
            </Text>

            <Text style={styles.interest}>
              Kuhanje
            </Text>
          </View>
        )}
      </ScrollView>

      {/* SPODNJA NAVIGACIJA */}
      <View style={styles.navigation}>
        {["Domov", "Moji hobiji", "O meni"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.navItem}
            onPress={() => setPage(item)}
          >
            <View
              style={[
                styles.navLine,
                page === item && styles.activeLine,
              ]}
            />

            <Text
              style={[
                styles.navText,
                page === item && styles.activeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  header: {
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 11,
    color: "#2864D8",
    fontWeight: "bold",
    letterSpacing: 2,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#182230",
    marginTop: 5,
  },

  headerMark: {
    backgroundColor: "#E8F0FF",
    color: "#2864D8",
    fontWeight: "bold",
    fontSize: 16,
    padding: 12,
    borderRadius: 12,
  },

  content: {
    padding: 18,
    paddingBottom: 30,
  },

  mainImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },

  articleImage: {
    width: "100%",
    height: 185,
    borderRadius: 15,
    marginBottom: 15,
  },

  profileImage: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E4EAF2",
  },

  label: {
    color: "#2864D8",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.3,
    marginBottom: 9,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#182230",
    marginBottom: 10,
  },

  intro: {
    color: "#667085",
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 18,
  },

  paragraph: {
    color: "#667085",
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#2864D8",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9,
    alignSelf: "flex-start",
    marginTop: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  smallCards: {
    flexDirection: "row",
    marginBottom: 15,
  },

  smallCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E4EAF2",
    marginRight: 6,
  },

  number: {
    color: "#2864D8",
    fontWeight: "bold",
    marginBottom: 10,
  },

  cardTitle: {
    color: "#182230",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  smallText: {
    color: "#667085",
    fontSize: 12,
    lineHeight: 18,
  },

  note: {
    backgroundColor: "#E8F0FF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  logoBox: {
    backgroundColor: "#F4F7FB",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
  },

  centerLogo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#182230",
    letterSpacing: 3,
  },

  centerLogoBlue: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2864D8",
    letterSpacing: 3,
  },

  centerSub: {
    fontSize: 11,
    color: "#667085",
    letterSpacing: 4,
    marginTop: 5,
  },

  separator: {
    height: 1,
    backgroundColor: "#E4EAF2",
    marginVertical: 15,
  },

  interest: {
    color: "#182230",
    fontSize: 14,
    paddingVertical: 7,
  },

  navigation: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E4EAF2",
    paddingBottom: 10,
    paddingTop: 8,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
  },

  navLine: {
    width: 22,
    height: 3,
    backgroundColor: "transparent",
    marginBottom: 7,
    borderRadius: 5,
  },

  activeLine: {
    backgroundColor: "#2864D8",
  },

  navText: {
    color: "#667085",
    fontSize: 12,
  },

  activeText: {
    color: "#2864D8",
    fontWeight: "bold",
  },
});
