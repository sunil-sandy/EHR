// src/styles/common.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6FF',
  },
  appBar: {
    width: '100%',
    height: '8%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 56,
  },
  logoContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F6FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    boxShadow: '0 2% 4% rgba(0,0,0,0.1)',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 48,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  recoverPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 32,
  },
  recoverPasswordText: {
    color: '#4B6BFB',
    fontSize: 14,
  },
  loginButton: {
    width: '50%',
    height: 48,
    backgroundColor: '#4B6BFB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpTextGray: {
    color: '#666',
    fontSize: 14,
  },
  signUpTextBlue: {
    color: '#4B6BFB',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  cancelButton: {
    width: '50%',
    height: 48,
    borderColor: '#4B6BFB',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cancelButtonText: {
    color: '#4B6BFB',
    fontSize: 16,
    fontWeight: '600',
  },
});