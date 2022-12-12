import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Section } from '../components/Section/Section';
import { Filter } from '../components/Filter/Filter';

export const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Section title="Phonebook">
        <ContactForm />
        <Filter />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </>
  );
};
