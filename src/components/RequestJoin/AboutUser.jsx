import React from 'react';
import { useForm } from 'react-hook-form';

function AboutUser({ setFormData, formData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(formData);

  return (
    <section className='w-full flex flex-col justify-center'>
      <h1 className='text-textblack font-bold text-2xl'>
        Cuéntanos sobre tu negocio
      </h1>
      {/* INPUT USER */}
      <section className='mt-6'>
        <label
          className={`label-required ${errors.supplier_name && 'span-alert'}`}>
          Nombre completo o Razón social
        </label>
        <div>
          <input
            value={formData.supplier_name}
            onChange={(event) =>
              setFormData({ ...formData, supplier_name: event.target.value })
            }
            autoComplete='off'
            type='text'
            className={`capitalize py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
              errors.supplier_name && 'input-danger'
            }`}
            {...register('supplier_name', {
              required: {
                value: true,
                message: 'El campo es requerido',
                maxLength: 30,
              },
              pattern: {
                value: /[a-zA-Z]/,
                message: 'El formato no es correcto',
              },
            })}
          />
          {errors.supplier_name && (
            <span className='span-alert'>{errors.supplier_name.message}</span>
          )}
        </div>
      </section>
      {/* INPUT PHONE */}
      <section className='flex space-x-6 justify-between items-center mt-5'>
        <div className='w-2/5'>
          <label
            className={`label-required ${
              errors.supplier_phone && 'span-alert'
            }`}>
            Telefono
          </label>
          <div>
            <input
              autoComplete='off'
              type='number'
              className={`py-2 pl-2 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.supplier_phone && 'input-danger'
              }`}
              {...register('supplier_phone', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                  maxLength: 10,
                  message: 'El telefono es de 10 digitos',
                },
              })}
            />
            {errors.supplier_phone && (
              <span className='span-alert'>
                {errors.supplier_phone.message}
              </span>
            )}
          </div>
        </div>
        {/* INPUT EMAIL */}
        <div className='w-3/5'>
          <label
            className={`label-required ${
              errors.supplier_email && 'span-alert'
            }`}>
            Correo electrónico
          </label>
          <div>
            <input
              autoComplete='off'
              type='email'
              className={`lowercase py-2 pl-2 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.supplier_email && 'input-danger'
              }`}
              {...register('supplier_email', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                  max: 25,
                  min: 5,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.supplier_email && (
              <span className='span-alert'>
                {errors.supplier_email.message}
              </span>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutUser;
