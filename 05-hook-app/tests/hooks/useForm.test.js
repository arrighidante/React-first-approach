import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Test on useForm', () => {
  const initialForm = {
    name: 'test',
    email: 'test@user.com',
  };

  test('should return the default values', () => {
    const { result } = renderHook(() => useForm(initialForm));

    // // OPTION 1:
    // expect(result.current).toEqual({
    //   name: initialForm.name,
    //   email: initialForm.email,
    //   formState: initialForm,
    //   onInputChange: expect.any(Function),
    //   onResetForm: expect.any(Function),
    // });

    // // OPTION 2:
    const { formState, onInputChange, onResetForm } = result.current;

    expect(formState).toEqual(initialForm);
    expect(onInputChange).toEqual(expect.any(Function));
    expect(onResetForm).toEqual(expect.any(Function));
  });

  test('should change the name in the formState', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    const event = {
      target: {
        name: 'name',
        value: 'Johnny',
      },
    };

    act(() => {
      onInputChange(event);
    });

    expect(result.current.name).toBe('Johnny');
    expect(result.current.formState.name).toBe('Johnny');
  });

  test('should reset the form values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    const event = {
      target: {
        name: 'name',
        value: 'Johnny',
      },
    };

    act(() => {
      onInputChange(event);
    });

    expect(result.current.name).toBe('Johnny');
    expect(result.current.formState.name).toBe('Johnny');

    act(() => {
      onResetForm();
    });

    expect(result.current.name).toBe('test');
    expect(result.current.formState.name).toBe('test');
  });
});
