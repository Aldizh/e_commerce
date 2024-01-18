/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { commerce } from '../../lib/commerce'
import FormInput from './CustomTextField'
import FormSelect from './CustomSelectField'

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingOptions, setShippingOptions] = useState([])
  const methods = useForm()

  const [shipping, setShipping] = useState({
    country: '',
    subdivision: '',
    option: ''
  })

  const {
    country,
    subdivision,
    option
  } = shipping

  useEffect(() => {
    async function fetchShippingCountries() {
      const { countries } = await commerce.services.localeListCountries();
  
      setShippingCountries(countries);
      setShipping({ ...shipping, country: Object.keys(countries)[0] });
    };

    fetchShippingCountries()
  }, []);

  useEffect(() => {
    async function fetchSubdivisions(countryCode) {
      const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
  
      setShippingSubdivisions(subdivisions);
      setShipping({ ...shipping, subdivision: Object.keys(subdivisions)[0] });
    };

    country && fetchSubdivisions(country);
  }, [country])

  useEffect(() => {
    async function fetchShippingOptions(checkoutTokenId, country, stateProvince = null){
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
  
      setShippingOptions(options);
      options[0] && setShipping({ ...shipping, option: Object.keys(options)[0] });
    };
    if (subdivision) fetchShippingOptions(checkoutToken.id, country, subdivision);
  }, [country, subdivision])

  const handleSelect = (key, value) => {
    setShipping({ ...shipping, [key]: value })
  }

  const parsedShippingOptions = shippingOptions.map((sO) => ([sO.id, `${sO.description} - (${sO.price.formatted_with_symbol})`]))

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({
          ...data,
          shippingCountry: country,
          shippingSubdivision: subdivision,
          shippingOption: option
        }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" default="12345" label="Zip / Postal code" />
            <FormSelect required label="Shipping Country" value={country} options={Object.entries(shippingCountries)} onChange={(e) => handleSelect("country", e.target.value)} />
            <FormSelect required label="Shipping Subdivision" value={subdivision} options={Object.entries(shippingSubdivisions)} onChange={(e) => handleSelect("subdivision", e.target.value)} />
            <FormSelect required label="Shipping Options" value={option} options={parsedShippingOptions} onChange={(e) => handleSelect("option", e.target.value)} />
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;